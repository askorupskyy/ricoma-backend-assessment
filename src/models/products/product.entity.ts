import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Base } from '../../common/entities/base.entity';
import { Size } from '../sizes/size.entity';
import { Store } from '../stores/store.entity';
import { Color } from '../colors/color.entity';

@ObjectType()
@Entity({ name: 'products' })
export class Product extends Base {
  @Field({ nullable: false })
  @Column({ nullable: false })
  name: string;

  // description of the item
  @Field({ nullable: false })
  @Column({ type: 'text', nullable: false })
  description: string;

  // price of the item
  @Field({ nullable: false })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  // whether we want to show this product in the store or not
  @Field({ nullable: false, defaultValue: true })
  @Column({ nullable: false, default: true })
  isActive?: boolean;

  // the foreign key to the store
  @Field(() => Store, { nullable: true })
  @ManyToOne(() => Store, ({ products }) => products, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  store?: Store;

  // the relationship to the size
  @Field(() => [Size], { nullable: true })
  @ManyToMany(() => Size, (size) => size.products, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  sizes?: Size[];

  // the relationship to the color
  @Field(() => [Color], { nullable: true })
  @ManyToMany(() => Color, (color) => color.products, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  colors?: Color[];
}
