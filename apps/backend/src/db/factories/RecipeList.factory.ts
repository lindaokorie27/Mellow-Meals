import { setSeederFactory } from 'typeorm-extension';
import { RecipeList } from '../entities';
import { faker } from '@faker-js/faker';

export const RecipeListFactory = setSeederFactory(RecipeList, () => {
  const recipeList = new RecipeList();
  recipeList.title = faker.commerce.productName(); // Use a product name as a recipe title
  recipeList.description = faker.lorem.sentence(); // Use lorem text for description
  // The `user` relation will be set during seeding or manually
  return recipeList;
});
