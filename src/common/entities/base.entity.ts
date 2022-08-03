import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DateTimeResolver as DateTime } from 'graphql-scalars';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export abstract class Base {
  @Field(() => Int, { nullable: false })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => DateTime)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => DateTime)
  @UpdateDateColumn()
  updatedAt: Date;
}
