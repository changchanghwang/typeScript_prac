// import { Sequelize } from 'sequelize';
// import { config } from '../config/config';
// import { User } from './users';

// export const sequelize = new Sequelize(
//   config.development.database,
//   config.development.username,
//   config.development.password,
//   {
//     host: config.development.host,
//     dialect: 'mysql',
//   }
// );

// export const db = {
//   sequelize,
//   User: User(sequelize),
// };

import * as sequelize from 'sequelize';
import { UserFactory } from './users';
import { EitherFactory } from './eihter';
import { config } from '../config/config';

export const db = new sequelize.Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    port: Number(config.development.port),
    dialect: 'mysql',
  }
);

// SOMETHING VERY IMPORTANT them Factory functions expect a
// sequelize instance as parameter give them `db`

export const User = UserFactory(db);
export const Either = EitherFactory(db);

// Users have either then lets create that relationship

User.hasMany(Either, {
  foreignKey: 'user',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});

// or instead of that, maybe many users have many either
// Either.belongsTo(User, {
//   foreignKey: 'user',
//   targetKey: 'id',
//   onDelete: 'CASCADE',
// });

// the skill is the limit!
