import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { RecipeList } from './RecipeList';
import { Ingredient } from './Ingredient';

@Entity()
export class RecipeIngredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string; // Name of the ingredient

  @Column({ type: 'float' })
  quantity: number; // The amount/measurement of the ingredient

  @Column({ type: 'varchar', length: 50 })
  unit: string; // e.g., grams, liters, cups

  @ManyToOne(() => RecipeList, (recipeList) => recipeList.ingredients)
  recipe: RecipeList; // Links to the RecipeList entity

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipeIngredients, {
    onDelete: 'CASCADE',
  })
  ingredient: Ingredient; // Links to the Ingredient entity
}
