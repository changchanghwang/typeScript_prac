import { Request, Response, NextFunction } from 'express';
import { User } from '../models';

class UserController {
  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findOne({ where: { id: 1 } });
      res.json({ user });
    } catch (err) {
      next(err);
    }
  };
  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        userId,
        nickname,
        pw,
        pwCheck,
        ageGroup,
      }: { userId: string; nickname: string; pw: string; pwCheck: string; ageGroup: number } =
        req.body;
      if (pw === pwCheck) {
        await User.create({
          userId,
          nickname,
          pw,
          ageGroup,
        });
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false });
      }
    } catch (err) {
      next(err);
    }
  };
}

export default new UserController();
