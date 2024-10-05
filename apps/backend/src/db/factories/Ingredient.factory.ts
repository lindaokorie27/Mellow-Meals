import { setSeederFactory } from 'typeorm-extension';
import { Ingredient } from '../entities';
import { faker } from '@faker-js/faker';

export const IngredientFactory = setSeederFactory(Ingredient, () => {
  const ingredient = new Ingredient();
  ingredient.name = faker.commerce.productName(); // Use faker to generate product names
  return ingredient;
});
