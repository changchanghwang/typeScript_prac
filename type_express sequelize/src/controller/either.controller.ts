import { Request, Response, NextFunction } from 'express';
import { QueryTypes } from 'sequelize';
import { Either, db } from '../models';

class EitherController {
  public getEither = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const either = await Either.findAll({
      //   include: {
      //     model: User,
      //     attributes: ['nickname'],
      //   },
      // });
      let query = `
        SELECT either.*, users.nickname FROM either LEFT JOIN users ON either.users = users.id;
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
      const users: number = 1;
      await Either.create({
        title,
        contentA,
        contentB,
        date,
        users,
      });
      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  };
}

export default new EitherController();
