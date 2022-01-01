import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import userRouter from './user';
import eitherRouter from './either';

const router = express.Router();

router.use('/users', userRouter);
router.use('/either', eitherRouter);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ say: 'hello' });
});

export default router;
