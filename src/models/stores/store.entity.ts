import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../common/entities/base.entity';
import { Product } from '../products/product.entity';
import { User } from '../users/user.entity';

@ObjectType()
@Entity({ name: 'stores' })
export class Store extends Base {
  @Field({ nullable: false })
  @Column({ nullable: false })
  name: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @Field({ nullable: false, defaultValue: true })
  @Column({ nullable: false, default: true })
  isActive?: boolean;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, ({ stores }) => stores, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  owner?: User;

  @Field(() => [Product], { nullable: true })
  @OneToMany(() => Product, ({ store }) => store)
  products?: Product[];
}
