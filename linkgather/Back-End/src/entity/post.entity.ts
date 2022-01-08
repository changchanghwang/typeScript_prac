import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Like } from './like.entity';
import { User } from './user.entity';

@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  desc: string;

  @Column({
    nullable: false,
  })
  image: string;

  @Column({
    nullable: false,
  })
  url: string;

  @Column({
    nullable: false,
  })
  uploadTime: string;

  @Column({
    nullable: true,
    default: 0,
  })
  likeNum: number;

  @ManyToOne((type) => User, (users) => users.posts, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: number | User;

  @OneToMany((type) => Like, (likes) => likes.user, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  likes: Like[];
}
