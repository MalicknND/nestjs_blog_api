// src/categories/entities/category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ManyToMany } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

@Entity() // <-- Table 'category'
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true }) // <-- Le nom de la catégorie doit être unique
  name: string;

  @ManyToMany(() => Post, (post) => post.categories) // <-- Relation Many-to-Many avec Post
  posts: Post[];
}
