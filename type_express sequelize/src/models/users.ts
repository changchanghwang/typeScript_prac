// import {
//   Sequelize,
//   DataTypes,
//   Model,
//   Optional,
//   HasManyGetAssociationsMixin,
//   HasManyAddAssociationMixin,
//   HasManyHasAssociationMixin,
//   HasManyCountAssociationsMixin,
//   HasManyCreateAssociationMixin,
//   Association,
// } from 'sequelize';
// import { sequelize } from './index'; //방금 만들어주었던 sequelize객체 임포트

// // These are all the attributes in the User model
// interface UsersAttributes {
//   // id: number | null;
//   userId: string;
//   pw: string;
//   nickname: string;
//   ageGroup: number;
//   exp: number;
// }

// export class User extends Model<UsersAttributes> {
//   public readonly id!: number; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
//   public userId: string;
//   public pw: string;
//   public nickname: string;
//   public ageGroup!: number;
//   public exp!: number;

//   // timestamps!
//   // public readonly createdAt!: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
//   // public readonly updatedAt!: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.

//   //여기는 안넣어줘도 일단 오류는 나지 않는다. 더 알아보고 나중에 업데이트 하겠다. 혹시 모르니깐-----
//   // // Since TS cannot determine model association at compile time
//   // // we have to declare them here purely virtually
//   // // these will not exist until `Model.init` was called.
//   // public getScores!: HasManyGetAssociationsMixin<Scores>; // Note the null assertions!
//   // public addScores!: HasManyAddAssociationMixin<Scores, number>;
//   // public hasScores!: HasManyHasAssociationMixin<Scores, number>;
//   // public countScores!: HasManyCountAssociationsMixin;
//   // public createScores!: HasManyCreateAssociationMixin<Scores>;

//   // // You can also pre-declare possible inclusions, these will only be populated if you
//   // // actively include a relation.
//   // public readonly projects?: Project[]; // Note this is optional since it's only populated when explicitly requested in code

//   // public static associations: {
//   //     userHasManyScores: Association<Users, Scores>;
//   // };
//   static associate() {}
// }
// //----------------------------
// User.init(
//   {
//     userId: {
//       type: DataTypes.STRING(45),
//       allowNull: false,
//       unique: true,
//     },
//     pw: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//     },
//     nickname: {
//       type: DataTypes.STRING(45),
//       allowNull: false,
//       unique: true,
//     },
//     ageGroup: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     exp: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 0,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     underscored: false,
//     modelName: 'User',
//     tableName: 'users',
//     paranoid: false,
//     charset: 'utf8',
//     collate: 'utf8_general_ci',
//   }
// );

// import * as Sequelize from 'sequelize';

// class UserClass extends Sequelize.Model {
//   userId: string;
//   nickname: string;
//   pw: string;
//   ageGroup: number;
//   exp: number;
// }

// export const User = (sequelize: Sequelize.Sequelize) => {
//   UserClass.init(
//     {
//       userId: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false,
//       },
//       nickname: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false,
//       },
//       pw: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       ageGroup: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       exp: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         defaultValue: 0,
//       },
//     },
//     {
//       sequelize,
//       timestamps: false,
//       underscored: false,
//       modelName: 'User',
//       tableName: 'users',
//       paranoid: false,
//       charset: 'utf8',
//       collate: 'utf8_general_ci',
//     }
//   );
// };

import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { Either } from './eihter';

export interface UserAttributes {
  id?: number;
  userId: string;
  nickname: string;
  pw: string;
  ageGroup: number;
  exp?: number;
}
export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

export function UserFactory(sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      pw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ageGroup: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      exp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
}
