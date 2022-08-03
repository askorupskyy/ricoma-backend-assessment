import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { LoginInput } from './inputs/login.input';
import { SignupInput } from './inputs/signup.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private generateTokens(user: User) {
    const accessToken = this.jwtService.sign(
      { sub: user.id },
      { expiresIn: '60m' },
    );
    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      { expiresIn: '1d' },
    );
    return { accessToken, refreshToken };
  }

  async login({ email, password }: LoginInput) {
    const user = await this.usersService.readOne({ email });

    const valid = await argon2.verify(user.password, password);

    if (!valid) throw new Error('Wrong credentials!');

    const { accessToken, refreshToken } = this.generateTokens(user);

    return { user, accessToken, refreshToken };
  }

  async signup({ email, password, ...params }: SignupInput) {
    const existingUser = await this.usersService.readOne({ email });

    if (existingUser) throw new Error('User already exists!');

    const user = await this.usersService.create({ ...params, email, password });

    const { accessToken, refreshToken } = this.generateTokens(user);

    return { user, accessToken, refreshToken };
  }

  async refresh(token: string) {
    const decoded = this.jwtService.verify<{
      sub: number;
      iat: number;
      exp: number;
    }>(token);

    const user = await this.usersService.readOne({ id: decoded.sub });

    const { accessToken, refreshToken } = this.generateTokens(user);

    return { user, accessToken, refreshToken };
  }
}
