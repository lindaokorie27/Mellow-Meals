import { setSeederFactory } from 'typeorm-extension';
import { GroceryList } from '../entities';
import { faker } from '@faker-js/faker';

export const GroceryListFactory = setSeederFactory(GroceryList, () => {
  const groceryList = new GroceryList();
  groceryList.title = faker.commerce.department(); // Generate a random grocery list title
  // The `user` relation will be set during seeding or manually
  return groceryList;
});
