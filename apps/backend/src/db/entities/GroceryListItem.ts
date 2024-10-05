import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { GroceryList } from './GroceryList';
import { Ingredient } from './Ingredient';

@Entity()
export class GroceryListItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'varchar', length: 50 })
  unit: string;  // e.g., grams, liters, cups
  
  @ManyToOne(() => GroceryList, (groceryList) => groceryList.groceryListItems)
  groceryList: GroceryList;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.groceryListItems)
  ingredient: Ingredient;
}
