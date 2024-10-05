import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { User } from "../entities/User";

export const UserFactory = setSeederFactory(User, (faker: Faker) => {
  const user = new User();
  user.name = faker.person.firstName();
  user.email = faker.internet.email();
  user.passwordHash = faker.internet.password({ length: 16 })
  return user;
});
