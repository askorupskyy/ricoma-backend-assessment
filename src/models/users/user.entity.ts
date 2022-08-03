import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import * as argon2 from 'argon2';
import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../../common/entities/base.entity';
import { Store } from '../stores/store.entity';
import { UserRole } from '../../common/enums/roles.enum';

registerEnumType(UserRole, {
  name: 'UserRole',
});

@ObjectType()
@Entity({ name: 'users' })
export class User extends Base {
  @Field({ nullable: false })
  @Column({ unique: true, nullable: false })
  email: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field({ nullable: false, defaultValue: true })
  @Column({ nullable: false, default: true })
  isActive?: boolean;

  @Field(() => UserRole, { nullable: true })
  @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
  role?: UserRole;

  @BeforeInsert()
  private async hashPassword() {
    this.password = await argon2.hash(this.password);
  }

  @Field(() => [Store], { nullable: true })
  @OneToMany(() => Store, ({ owner }) => owner)
  stores?: Store[];
}
