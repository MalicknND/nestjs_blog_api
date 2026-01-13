// src/posts/entities/post.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Category } from '../../categories/entities/category.entity';

@Entity() // <-- Table 'post'
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text') // <-- Utiliser 'text' pour du contenu potentiellement long
  content: string;

  @CreateDateColumn() // <-- Date de création, gérée automatiquement
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.posts) // <-- Relation Many-to-One avec User
  authors: User;

  @ManyToMany(() => Category, (category) => category.posts) // <-- Relation Many-to-Many avec Category
  @JoinTable() // <-- Table de jointure pour la relation Many-to-Many
  categories: Category[];
}
