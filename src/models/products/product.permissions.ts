import { Permissions, Actions } from 'nest-casl';
import { InferSubjects } from '@casl/ability';

import { UserRole } from '../../common/enums/roles.enum';
import { Product } from './product.entity';

export type Subjects = InferSubjects<typeof Product>;

export const permissions: Permissions<UserRole, Product, Actions> = {
  everyone({ can }) {
    can(Actions.read, Product);
  },

  customer({ user, can }) {
    can(Actions.read, Product);
    // can(Actions.create, Product, {store: {owner: user}});
    //can(Actions.update, Product, { store: {owner: user} });
    //can(Actions.update, Product, { store: {owner: user} });
  },
  admin({ can }) {
    can(Actions.manage, Product);
  },
};
