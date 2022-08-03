import { Injectable, Logger } from '@nestjs/common';
import { ColorsService } from '../../models/colors/colors.service';
import { ProductsService } from '../../models/products/products.service';
import { SizesService } from '../../models/sizes/sizes.service';
import { StoresService } from '../../models/stores/stores.service';
import { UsersService } from '../../models/users/users.service';
import {
  COLORS_DATA,
  PRODUCTS_DATA,
  STORES_DATA,
  USERS_DATA,
  SIZES_DATA,
} from './seed.data';

@Injectable()
export class SeedCommandRunnerService {
  constructor(
    private userService: UsersService,
    private storesService: StoresService,
    private productService: ProductsService,
    private colorsService: ColorsService,
    private sizesService: SizesService,
  ) {}

  private readonly logger = new Logger(SeedCommandRunnerService.name);

  async seedAll() {
    await this.seedUsers();
    await this.seedStores();
    await this.seedColors();
    await this.seedProducts();
    await this.seedSizes();
    return;
  }

  async seedUsers() {
    const users = await Promise.all(
      USERS_DATA.map((user) => this.userService.create(user)),
    );

    users.forEach((user) => {
      this.logger.log(`Created user ${user.email} with id: ${user.id}`);
    });

    return users;
  }

  async seedStores() {
    const user = await this.userService.readOne({ email: 'henry@ricoma.com' });

    const stores = await Promise.all(
      STORES_DATA.map((store) =>
        this.storesService.create({ ...store, owner: user }),
      ),
    );

    stores.forEach((store) => {
      this.logger.log(`Created store ${store.name} with id: ${store.id}`);
    });

    return stores;
  }

  async seedColors() {
    const colors = await Promise.all(
      COLORS_DATA.map((color) => this.colorsService.create({ ...color })),
    );

    colors.forEach((color) => {
      this.logger.log(`Created color ${color.name} with id: ${color.id}`);
    });

    return colors;
  }

  async seedProducts() {
    const store = await this.storesService.readOne({
      name: STORES_DATA[0].name,
    });

    const products = await Promise.all(
      PRODUCTS_DATA.map((product) =>
        this.productService.create({ ...product, store }),
      ),
    );

    products.forEach((product) => {
      this.logger.log(`Created product ${product.name} with id: ${product.id}`);
    });

    return products;
  }

  async seedSizes() {
    const sizes = await Promise.all(
      SIZES_DATA.map((size) => this.sizesService.create({ ...size })),
    );

    sizes.forEach((size) => {
      this.logger.log(`Created size ${size.name} with id: ${size.id}`);
    });

    return sizes;
  }
}
