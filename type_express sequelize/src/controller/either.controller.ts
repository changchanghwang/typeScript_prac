import { Request, Response, NextFunction } from 'express';
import { QueryTypes } from 'sequelize';
import { Either, db, User } from '../models';

class EitherController {
  public getEither = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const either = await Either.findAll({
      //   include: {
      //     model: User,
      //     as: 'users',
      //     attributes: ['nickname'],
      //   },
      // });
      // const a = await User.findAll();
      let query = `
        SELECT either.*, users.nickname FROM either LEFT JOIN users ON either.user = users.id;
      `;
      const either = await db.query(query, { type: QueryTypes.SELECT });
      res.status(200).json({ either });
    } catch (err) {
      next(err);
    }
  };
  public createEither = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        title,
        contentA,
        contentB,
        date,
      }: { title: string; contentA: string; contentB: string; date: string } = req.body;
      const user: number = 1;
      await Either.create({
        title,
        contentA,
        contentB,
        date,
        user,
      });
      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  };
}

export default new EitherController();
