import { Permissions, Actions } from 'nest-casl';
import { InferSubjects } from '@casl/ability';

import { UserRole } from '../../common/enums/roles.enum';
import { Store } from './store.entity';

export type Subjects = InferSubjects<typeof Store>;

export const permissions: Permissions<UserRole, Store, Actions> = {
  everyone({ can }) {
    can(Actions.read, Store);
  },

  customer({ user, can }) {
    can(Actions.read, Store);
    can(Actions.create, Store);
    can(Actions.update, typeof Store, { owner: user });
    can(Actions.delete, typeof Store, { owner: { $eq: user } });
  },
  admin({ can }) {
    can(Actions.manage, Store);
  },
};
