import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import userCtrl from '../controllers/user.controller';

const router = express.Router();

router.get('/users', userCtrl.getUser);
router.post('/users', userCtrl.createUser);
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ say: 'hello' });
});

export default router;
