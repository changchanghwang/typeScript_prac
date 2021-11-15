import { Request, Response, NextFunction } from 'express';
import { User } from '../models/users';

class UserController {
  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (err) {
      next(err);
    }
  };
}
