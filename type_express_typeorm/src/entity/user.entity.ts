import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  password: string;

  static findOneByEmail(email: string) {
    return this.createQueryBuilder('users')
      .where('users.email=:email', { email })
      .getOne();
  }
}
