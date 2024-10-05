import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { GroceryListItem } from './GroceryListItem';
import { RecipeGroceryList } from './RecipeGroceryList';

@Entity()
export class GroceryList {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'boolean', default: false })
  archived: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.groceryLists)
  user: User;

  @OneToMany(() => GroceryListItem, (groceryListItem) => groceryListItem.groceryList, { cascade: true })
  groceryListItems: GroceryListItem[];

  @OneToMany(() => RecipeGroceryList, (recipeGroceryList) => recipeGroceryList.groceryList, { cascade: true })
  recipeGroceryLists: RecipeGroceryList[];
}
