import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne} from "typeorm";
import { User } from "./User";

@Entity({ name: "lists" })
export class UserIngredient {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => User)
    @JoinColumn()
    userId: string;

    @CreateDateColumn()
    ingredientId: string;
}