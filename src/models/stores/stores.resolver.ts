import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreCreateInput } from './inputs/store-create.input';
import { StoreUpdateInput } from './inputs/store-update.input';
import { Store } from './store.entity';
import { StoreHook } from './store.hook';
import { StoresService } from './stores.service';

//import { AccessGuard, UseAbility, Actions } from 'nest-casl';

@Resolver(() => Store)
export class StoresResolver {
  constructor(private storesService: StoresService) {}

  @Query(() => [Store])
  stores() {
    return this.storesService.read();
  }

  @Query(() => Store)
  store(@Args('id', { type: () => Int }) id: number) {
    return this.storesService.readOne({ id });
  }

  @Mutation(() => Store)
  storeCreate(@Args('storeCreateInput') storeCreateInput: StoreCreateInput) {
    return this.storesService.create(storeCreateInput);
  }

  @Mutation(() => Store)
  //@UseGuards(AccessGuard)
  //@UseAbility(Actions.create, Store, StoreHook)
  storeUpdate(@Args('storeUpdateInput') storeUpdateInput: StoreUpdateInput) {
    return this.storesService.update(storeUpdateInput);
  }

  //@UseGuards(AccessGuard)
  //@UseAbility(Actions.delete, Store, StoreHook)
  @Mutation(() => Boolean)
  storeDelete(@Args('id', { type: () => Int }) id: number) {
    return this.storesService.delete(id);
  }
}
