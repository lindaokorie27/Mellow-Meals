import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from "typeorm";

import { Ingredient } from "./Ingredients";

@Entity()
export class ListItem {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    listId: string;

    @OneToOne(() => Ingredient)
    @JoinColumn()
    ingredientId: string;

    @Column()
    quantity: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}