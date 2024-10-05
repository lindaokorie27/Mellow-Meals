import { setSeederFactory } from 'typeorm-extension';
import { RecipeIngredient } from '../entities';
import { faker } from '@faker-js/faker';

export const RecipeIngredientFactory = setSeederFactory(RecipeIngredient, () => {
  const recipeIngredient = new RecipeIngredient();
  recipeIngredient.name = faker.commerce.productName(); // Use faker to generate product names
  recipeIngredient.quantity = faker.number.float({ min: 1, max: 500 }); // Generate random quantity
  recipeIngredient.unit = faker.helpers.arrayElement(['g', 'kg', 'ml', 'cup']); // Use random units
  // Relations for `recipe` and `ingredient` will be set during seeding or manually
  return recipeIngredient;
});
