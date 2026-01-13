// src/categories/entities/category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // <-- Table 'category'
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true }) // <-- Le nom de la catégorie doit être unique
  name: string;
}
