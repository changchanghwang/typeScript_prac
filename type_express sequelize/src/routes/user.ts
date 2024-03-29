import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import userCtrl from '../controller/user.controller';
const router = express.Router();

router.get('/', userCtrl.getUser);
router.post('/', userCtrl.createUser);

export default router;
