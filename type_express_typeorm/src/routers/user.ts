import { NextFunction, Router, Request, Response } from 'express';
import Routers from '../interfaces/router.interface';
import userController from '../controllers/user.controller';

class userRouter implements Routers {
  public path = '/user';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, userController.signUp);
    this.router.get(
      `${this.path}`,
      (req: Request, res: Response, next: NextFunction) => {
        res.json({ hi: 'hi' });
      }
    );
  }
}

export default userRouter;
