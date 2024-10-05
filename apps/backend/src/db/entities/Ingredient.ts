import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RecipeIngredient } from './RecipeIngredient';
import { GroceryListItem } from './GroceryListItem';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'enum', enum: ['default', 'user'], default: 'default' })
  type: 'default' | 'user'; // Default ingredient or user-added ingredient

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.ingredient, { cascade: true })
  recipeIngredients: RecipeIngredient[]; // Link to ingredients from recipes created by this user

  @OneToMany(() => GroceryListItem, (groceryListItem) => groceryListItem.ingredient, { cascade: true })
  groceryListItems: GroceryListItem[];
}
