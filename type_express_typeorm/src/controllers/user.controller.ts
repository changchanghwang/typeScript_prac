import { Request, Response, NextFunction } from 'express';

class userController {
  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, password } = req.body;
  };
}

export default new userController();
