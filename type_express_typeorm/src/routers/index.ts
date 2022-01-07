import { Router, Request, Response, NextFunction } from 'express';
import Routers from '../interfaces/router.interface';
import Index from '../controllers/index';
import userController from '../controllers/user.controller';

class indexRouter implements Routers {
  public path = '/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
    this.userRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, Index.getIndex);
  }

  private userRoutes() {
    this.router.post('/user', userController.signUp);
  }
}

export default indexRouter;
