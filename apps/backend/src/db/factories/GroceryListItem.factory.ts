import { setSeederFactory } from 'typeorm-extension';
import { GroceryListItem } from '../entities/GroceryListItem';
import { faker } from '@faker-js/faker';

export const GroceryListItemFactory = setSeederFactory(GroceryListItem, () => {
  const groceryListItem = new GroceryListItem();
  groceryListItem.quantity = faker.number.int({ min: 1, max: 10 }); // Generate random quantity
  groceryListItem.unit = faker.helpers.arrayElement(['g', 'kg', 'ml', 'cup']); // Use random units
  // Relations for `groceryList` and `ingredient` will be set during seeding or manually
  return groceryListItem;
});
