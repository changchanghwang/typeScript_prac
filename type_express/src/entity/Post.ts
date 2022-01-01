import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';

@Entity('either')
export class Either extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    nullable: false,
  })
  title: string;

  @Column({
    length: 50,
    nullable: false,
  })
  contentA: string;

  @Column({
    length: 50,
    nullable: false,
  })
  contentB: string;

  @Column({
    nullable: false,
  })
  date: string;

  @Column({
    nullable: false,
    default: false,
  })
  completed: boolean;

  @Column({
    nullable: true,
    default: false,
  })
  edited: boolean;

  @Column({
    nullable: true,
  })
  editedDate: string;

  @Column({
    default: 0,
  })
  likeCnt: number;

  @ManyToOne((type) => User, (user) => user.either)
  user: User;
}

@Entity('multi')
export class Multi extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    nullable: false,
  })
  title: string;

  @Column({
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({
    length: 50,
    nullable: false,
  })
  contentA: string;

  @Column({
    length: 50,
    nullable: false,
  })
  contentB: string;

  @Column({
    length: 50,
    nullable: false,
  })
  contentC: string;

  @Column({
    length: 50,
    nullable: false,
  })
  contentD: string;

  @Column({
    length: 50,
    nullable: false,
  })
  contentE: string;

  @Column({
    nullable: false,
  })
  date: string;

  @Column({
    nullable: false,
    default: false,
  })
  completed: boolean;

  @Column({
    nullable: true,
    default: false,
  })
  edited: boolean;

  @Column({
    nullable: true,
  })
  editedDate: string;

  @Column({
    default: 0,
  })
  likeCnt: number;

  @ManyToOne((type) => User, (user) => user.multi)
  user: User;
}
