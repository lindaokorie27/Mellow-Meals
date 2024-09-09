import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne} from "typeorm";
import { User } from "./User";

@Entity({ name: "recipes" })
export class Recipe {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    title: string;

    @Column()
    description: string;

    @Column()
    steps: string[];

    @OneToOne(() => User)
    @JoinColumn()
    userId: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}