import { Router } from 'express';
import postController from '../controllers/post.controller';
import Routers from '../interfaces/router.interface';
import { auth } from '../middlewares/auth';

class postRouter implements Routers {
  public path = '/posts';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, auth, postController.createPost);
  }
}

export default postRouter;
