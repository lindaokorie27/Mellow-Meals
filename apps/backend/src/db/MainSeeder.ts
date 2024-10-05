import { DataSource } from 'typeorm';
import { SeederFactoryManager } from 'typeorm-extension';
import {
  GroceryList,
  GroceryListItem,
  Ingredient,
  RecipeGroceryList,
  RecipeIngredient,
  RecipeList,
  User,
  UserIngredient,
} from './entities';
import { faker } from '@faker-js/faker';

export class MainSeeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager) {
    await dataSource.transaction(async (transactionalEntityManager) => {
      // Create 5 users
      const users = await Promise.all(
        Array.from({ length: 5 }, () => factoryManager.get(User).make())
      );
      await transactionalEntityManager.save(User, users);

      // Create 10 ingredients
      const ingredients = await Promise.all(
        Array.from({ length: 10 }, () => factoryManager.get(Ingredient).make())
      );
      await transactionalEntityManager.save(Ingredient, ingredients);

      // Create 10 grocery lists associated with random users
      const groceryLists = await Promise.all(
        Array(10)
          .fill('')
          .map(async () => {
            const groceryList = await factoryManager.get(GroceryList).make();
            groceryList.user = faker.helpers.arrayElement(users); // Assign a random user
            groceryList.recipeGroceryLists = []; // create empty recipeGroceryList column
            return await transactionalEntityManager.save(
              GroceryList,
              groceryList
            );
          })
      );

      // Create 5 user ingredients with random users
      const userIngredients = await Promise.all(
        Array(5)
          .fill('')
          .map(async () => {
            const userIngredient = await factoryManager
              .get(UserIngredient)
              .make();
            userIngredient.user = faker.helpers.arrayElement(users); // Assign a random user
            return await transactionalEntityManager.save(
              UserIngredient,
              userIngredient
            );
          })
      );

      // Create 5 recipes associated with random users
      const recipes = await Promise.all(
        Array(5)
          .fill('')
          .map(async () => {
            const recipe = await factoryManager.get(RecipeList).make();
            recipe.user = faker.helpers.arrayElement(users); // Assign a random user
            recipe.recipeGroceryLists = []; // create empty recipeGroceryList column
            recipe.ingredients = []; // create empty recipeIngredient column
            return await transactionalEntityManager.save(RecipeList, recipe);
          })
      );

      // Create 8 recipe grocery lists associated with random recipes and grocery lists
      const recipeGroceryLists = await Promise.all(
        Array(8)
          .fill('')
          .map(async () => {
            const recipeGroceryList = await factoryManager
              .get(RecipeGroceryList)
              .make();
            recipeGroceryList.recipe = faker.helpers.arrayElement(recipes); // Assign a random recipe
            recipeGroceryList.groceryList =
              faker.helpers.arrayElement(groceryLists); // Assign a random grocery list

            // push the relations to both sides before saving
            recipeGroceryList.recipe.recipeGroceryLists.push(recipeGroceryList);
            recipeGroceryList.groceryList.recipeGroceryLists.push(
              recipeGroceryList
            );

            return await transactionalEntityManager.save(
              RecipeGroceryList,
              recipeGroceryList
            );
          })
      );

      // Create 20 recipe ingredients associated with random recipes and ingredients
      const recipeIngredients = await Promise.all(
        Array(20)
          .fill('')
          .map(async () => {
            const recipeIngredient = await factoryManager
              .get(RecipeIngredient)
              .make();
            recipeIngredient.ingredient =
              faker.helpers.arrayElement(ingredients); // Assign a random ingredient
            recipeIngredient.recipe = faker.helpers.arrayElement(recipes); // Assign a random recipe

            // push the relations to both sides before saving
            recipeIngredient.recipe.ingredients.push(recipeIngredient);

            return await transactionalEntityManager.save(
              RecipeIngredient,
              recipeIngredient
            );
          })
      );

      // Create 20 grocery list items associated with random grocery lists and ingredients
      const groceryListItems = await Promise.all(
        Array(20)
          .fill('')
          .map(async () => {
            const groceryListItem = await factoryManager
              .get(GroceryListItem)
              .make();
            groceryListItem.groceryList =
              faker.helpers.arrayElement(groceryLists); // Assign to a random list
            groceryListItem.ingredient =
              faker.helpers.arrayElement(ingredients); // Assign a random ingredient
            return await transactionalEntityManager.save(
              GroceryListItem,
              groceryListItem
            );
          })
      );

      // Save all entities in one go (already saved where necessary)
      await Promise.all([
        transactionalEntityManager.save(users),
        transactionalEntityManager.save(ingredients),
        transactionalEntityManager.save(userIngredients),
        transactionalEntityManager.save(groceryLists),
        transactionalEntityManager.save(groceryListItems),
        transactionalEntityManager.save(recipeIngredients),
        transactionalEntityManager.save(recipes),
        transactionalEntityManager.save(recipeGroceryLists),
      ]);
    });
  }
}
