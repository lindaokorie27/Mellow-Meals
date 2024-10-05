import { setSeederFactory } from 'typeorm-extension';
import { UserIngredient } from '../entities';
import { faker } from '@faker-js/faker';

export const UserIngredientFactory = setSeederFactory(UserIngredient, () => {
  const userIngredient = new UserIngredient();
  userIngredient.name = faker.commerce.productName(); // Use faker to generate product names
  // The `user` relation will be set during seeding or manually
  return userIngredient;
});