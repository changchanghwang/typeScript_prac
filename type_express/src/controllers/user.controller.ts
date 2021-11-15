import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

class UserController {
  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await getRepository(User).find();
      res.json(user);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
      throw new Error(e);
    }
  };
  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, nickname, pw, pwCheck, ageGroup } = req.body;
    if (pw === pwCheck) {
      try {
        const user = new User();
        user.userId = userId;
        user.nickname = nickname;
        user.pw = pw;
        user.ageGroup = ageGroup;
        user.save();
        res.json({ success: true });
      } catch (e: any) {
        throw new Error(e);
      }
    } else {
      res.json({ success: false });
    }
  };
}

export default new UserController();
