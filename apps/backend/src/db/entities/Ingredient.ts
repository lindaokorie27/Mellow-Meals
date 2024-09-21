import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RecipeIngredient } from './RecipeIngredient';
import { GroceryListItem } from './GroceryListItem';

@Entity('ingredients')
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'enum', enum: ['default', 'user'], default: 'default' })
  type: 'default' | 'user'; // Default ingredient or user-added ingredient

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.ingredient)
  recipeIngredients: RecipeIngredient[]; // Link to ingredients from recipes created by this user

  @OneToMany(() => GroceryListItem, (groceryListItem) => groceryListItem.ingredient)
  groceryListItems: GroceryListItem[];
}
