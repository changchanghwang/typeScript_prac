import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Either, Multi } from './Post';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
    unique: true,
    nullable: false,
  })
  userId: string;
  @Column({
    unique: true,
    nullable: false,
  })
  nickname: string;

  @Column({
    nullable: false,
  })
  pw: string;

  @Column({
    nullable: false,
  })
  ageGroup: number;

  @Column({
    default: 0,
  })
  exp: number;

  @OneToMany((type) => Either, (either) => either.user)
  either: Either[];
  @OneToMany((type) => Multi, (multi) => multi.user)
  multi: Multi[];
}
