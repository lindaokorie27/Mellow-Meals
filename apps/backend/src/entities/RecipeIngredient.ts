import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn} from "typeorm";

import { Recipe } from "./Recipe";
import { Ingredient } from "./Ingredients";

@Entity()
export class RecipeIngredient {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => Recipe)
    @JoinColumn()
    recipeId: string;

    @OneToOne(() => Ingredient)
    @JoinColumn()
    ingredientId: string;

    @Column({ nullable: false })
    quantity: number;
}