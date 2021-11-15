import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Either } from '../entity/Post';
import { User } from '../entity/User';

class EitherController {
  public getEither = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const either = await getRepository(Either).find();
      res.json(either);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
      throw new Error(e);
    }
  };
  public createEither = async (req: Request, res: Response, next: NextFunction) => {
    const { title, contentA, contentB, date } = req.body;
    try {
      const user = await getRepository(User).findOne({
        id: 1,
      });
      const either = new Either();
      either.title = title;
      either.contentA = contentA;
      either.contentB = contentB;
      either.date = date;
      either.user = user;
      either.save();
      res.json({ success: true });
    } catch (e: any) {
      throw new Error(e);
    }
  };
}

export default new EitherController();
