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
    const users = await getRepository(User).find();
    const user = new User();
    user.userId = 'hwang';
    user.pw = 'asdf1234';
    user.pwCheck = 'asdf1234';
    try {
      user.save();
      res.json({ msg: 'success' });
    } catch (e: any) {
      throw new Error(e);
    }
  };
}

export default new UserController();
