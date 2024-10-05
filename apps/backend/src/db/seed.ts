import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import {
  GroceryList,
  GroceryListItem,
  Ingredient,
  RecipeIngredient,
  RecipeList,
  RecipeGroceryList,
  User,
  UserIngredient,
} from './entities';
import {
  GroceryListFactory,
  GroceryListItemFactory,
  IngredientFactory,
  RecipeIngredientFactory,
  RecipeListFactory,
  RecipeGroceryListFactory,
  UserFactory,
  UserIngredientFactory,
} from './factories';
import { MainSeeder } from './MainSeeder';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT || '3306'),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [
    GroceryList,
    GroceryListItem,
    Ingredient,
    RecipeIngredient,
    RecipeList,
    RecipeGroceryList,
    User,
    UserIngredient,
  ],
  factories: [
    GroceryListFactory,
    GroceryListItemFactory,
    IngredientFactory,
    RecipeIngredientFactory,
    RecipeListFactory,
    RecipeGroceryListFactory,
    UserFactory,
    UserIngredientFactory,
  ],
  seeds: [MainSeeder],
};

const AppDataSource = new DataSource(dataSourceOptions);

AppDataSource.initialize().then(async () => {
  await AppDataSource.synchronize(true);
  await runSeeders(AppDataSource); // Run MainSeeder to seed all
  process.exit();
});
