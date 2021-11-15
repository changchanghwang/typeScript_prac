import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
const router = express.Router();
import userRouter from './user';

router.use('/user', userRouter);
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ say: 'hello' });
});

export default router;
