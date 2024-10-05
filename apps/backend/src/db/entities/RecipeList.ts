import { PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Entity } from 'typeorm';
import { User } from './User';
import { RecipeIngredient } from './RecipeIngredient';
import { RecipeGroceryList } from './RecipeGroceryList';

@Entity()
export class RecipeList {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', nullable: true })
  link: string;  // For recipes added by link, this stores the URL (nullable)

  @Column({ type: 'text', nullable: true })
  instructions: string;  // For recipes with manual instructions (nullable)

  @ManyToOne(() => User, (user) => user.recipes)
  user: User;

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.recipe, { cascade: true })
  ingredients: RecipeIngredient[];

  @OneToMany(() => RecipeGroceryList, (recipeGroceryList) => recipeGroceryList.recipe, { cascade: true })
  recipeGroceryLists: RecipeGroceryList[]; // grocery lists this reecipe has been added to

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
