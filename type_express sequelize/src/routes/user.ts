import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ say: 'hello' });
});

export default router;
