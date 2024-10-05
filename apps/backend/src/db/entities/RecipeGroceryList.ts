import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RecipeList } from './RecipeList';
import { GroceryList } from './GroceryList';

@Entity()
export class RecipeGroceryList {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RecipeList, (recipe) => recipe.recipeGroceryLists, {
    onDelete: 'CASCADE',
  })
  recipe: RecipeList;

  @ManyToOne(
    () => GroceryList,
    (groceryList) => groceryList.recipeGroceryLists,
    { onDelete: 'CASCADE' }
  )
  groceryList: GroceryList;
}
