import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GroceryList } from './GroceryList';
import { RecipeList } from './RecipeList';
import { UserIngredient } from './UserIngredient';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar' })
  passwordHash: string;

  @OneToMany(() => GroceryList, (groceryList) => groceryList.user, {
    cascade: true,
  })
  groceryLists: GroceryList[];

  @OneToMany(() => RecipeList, (recipe) => recipe.user, { cascade: true })
  recipes: RecipeList[]; // Link to recipes created by this user

  @OneToMany(() => UserIngredient, (userIngredient) => userIngredient.user, {
    cascade: true,
  })
  userIngredients: UserIngredient[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
