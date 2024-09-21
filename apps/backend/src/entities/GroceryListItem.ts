import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { GroceryList } from './GroceryList';
import { Ingredient } from './Ingredient';

@Entity('grocery_list_items')
export class GroceryListItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => GroceryList, (groceryList) => groceryList.groceryListItems)
  groceryList: GroceryList;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.groceryListItems)
  ingredient: Ingredient;
}
