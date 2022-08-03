import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Base } from '../../common/entities/base.entity';
import { Product } from '../products/product.entity';

@ObjectType()
@Entity({ name: 'colors' })
export class Color extends Base {
  @Field({ nullable: false })
  @Column({ nullable: false })
  name: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  hexValue: string;

  // the many-to-many crosstable to connect the store
  @Field(() => [Product], { nullable: true })
  @ManyToMany(() => Product, (product) => product.colors, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  products?: Product[];
}
