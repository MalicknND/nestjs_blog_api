import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
