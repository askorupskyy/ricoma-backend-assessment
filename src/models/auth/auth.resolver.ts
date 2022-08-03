import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Public } from '../../common/decorators/ispublic.decorator';
import { Auth } from './auth.model';
import { AuthService } from './auth.service';
import { LoginInput } from './inputs/login.input';
import { RefreshInput } from './inputs/refresh.input';
import { SignupInput } from './inputs/signup.input';

@Public()
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Auth)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }

  @Mutation(() => Auth)
  signup(@Args('signupInput') signupInput: SignupInput) {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => Auth)
  refresh(@Args('refreshInput') { token }: RefreshInput) {
    return this.authService.refresh(token);
  }
}
