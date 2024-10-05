import { setSeederFactory } from 'typeorm-extension';
import { RecipeGroceryList } from '../entities';

export const RecipeGroceryListFactory = setSeederFactory(RecipeGroceryList, () => {
  const recipeGroceryList = new RecipeGroceryList();
  // The `recipe` and `groceryList` relation will be set during seeding or manually
  return recipeGroceryList;
});
