import { Injectable } from '@nestjs/common';
import { Request, SubjectBeforeFilterHook } from 'nest-casl';

import { StoresService } from './stores.service';
import { Store } from './store.entity';

@Injectable()
export class StoreHook implements SubjectBeforeFilterHook<Store, Request> {
  constructor(readonly storeService: StoresService) {}

  async run({ params }: Request) {
    return this.storeService.readOne(params.storeUpdateInput.id);
  }
}
