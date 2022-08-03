import { Color } from 'src/models/colors/color.entity';
import { UserRole } from '../../common/enums/roles.enum';
import { Product } from '../../models/products/product.entity';
import { Size } from '../../models/sizes/size.entity';
import { Store } from '../../models/stores/store.entity';
import { User } from '../../models/users/user.entity';

export const USERS_DATA: Omit<User, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    firstName: 'Admin',
    lastName: 'Ricoma',
    email: 'admin@ricoma.com',
    password: 'password0',
    role: UserRole.ADMIN,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@ricoma.com',
    password: 'password1',
  },
  {
    firstName: 'Lera',
    lastName: 'Knight',
    email: 'lera@ricoma.com',
    password: 'password2',
  },
  {
    firstName: 'Carl',
    lastName: 'Sanchez',
    email: 'carl@ricoma.com',
    password: 'password3',
  },
  {
    firstName: 'Patty',
    lastName: 'Ontivero',
    email: 'patty@ricoma.com',
    password: 'password4',
  },
  {
    firstName: 'Henry',
    lastName: 'Ma',
    email: 'henry@ricoma.com',
    password: 'password5',
  },
];

export const STORES_DATA: Omit<Store, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'Ricoma International Corp',
    description:
      'Free Hands-on Training, Starter Embroidery Kit, Multiple Hoops, Cap Attachments & More!',
  },
  {
    name: 'Garmeo',
    description:
      'Custom Apparel For Any Occasion! Easily coordinate your stlyle for your next event in minutes!',
  },
];

export const COLORS_DATA: Omit<Color, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'Black',
    hexValue: '#000000',
  },
  {
    name: 'White',
    hexValue: '#FFFFFF',
  },
  {
    name: 'Red',
    hexValue: '#FF0000',
  },
];

export const PRODUCTS_DATA: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>[] =
  [
    {
      name: 'Starter Embroidery Kit',
      description:
        'Free Hands-on Training, Starter Embroidery Kit, Multiple Hoops, Cap Attachments & More!',
      price: 10.0,
    },
    {
      name: 'Multiple Hoops',
      description:
        'Custom Apparel For Any Occasion! Easily coordinate your stlyle for your next event in minutes!',
      price: 20.0,
    },
    {
      name: 'Cap Attachments',
      description:
        'Custom Apparel For Any Occasion! Easily coordinate your stlyle for your next event in minutes!',
      price: 30.0,
    },
  ];

export const SIZES_DATA: Omit<Size, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'Small',
  },
  {
    name: 'Medium',
  },
  {
    name: 'Large',
  },
];
