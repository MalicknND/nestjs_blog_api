// src/posts/entities/post.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

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

  @Column() // <-- Pour l'instant, juste l'ID de l'auteur. Nous améliorerons ça !
  authorId: number;
}
