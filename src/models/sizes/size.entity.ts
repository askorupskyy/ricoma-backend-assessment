import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Base } from '../../common/entities/base.entity';
import { Product } from '../products/product.entity';

@ObjectType()
@Entity({ name: 'sizes' })
export class Size extends Base {
  @Field({ nullable: false })
  @Column({ nullable: false })
  name: string;

  // the many-to-many crosstable to connect the store
  @Field(() => [Product], { nullable: true })
  @ManyToMany(() => Product, (product) => product.sizes, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  products?: Product[];
}
