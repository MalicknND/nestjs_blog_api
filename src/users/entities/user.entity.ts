import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

@Entity() // <-- Marque cette classe comme une table 'user'
export class User {
  @PrimaryGeneratedColumn() // <-- Colonne de clé primaire auto-générée
  id: number;

  @Column({ unique: true }) // <-- Colonne 'email' unique
  email: string;

  @Column() // <-- Colonne 'password'
  password: string;

  @Column({ nullable: true }) // <-- Colonne 'name' pouvant être nulle
  name: string;

  @OneToMany(() => Post, (post) => post.authors) // <-- Relation One-to-Many avec Post
  posts: Post[];
}
