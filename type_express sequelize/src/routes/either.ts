import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import eitherCtrl from '../controller/either.controller';
const router = express.Router();

router.get('/', eitherCtrl.getEither);
router.post('/', eitherCtrl.createEither);

export default router;
