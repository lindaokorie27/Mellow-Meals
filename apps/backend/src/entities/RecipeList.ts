import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";

import { Recipe } from "./Recipe";
import { List } from "./List";

@Entity()
export class RecipeList {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => Recipe)
    @JoinColumn()
    recipeId: string;

    @OneToOne(() => List)
    @Column()
    listId: string;
}
