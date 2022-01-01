import * as express from 'express';
import eitherCtrl from '../controllers/either.controller';

const router = express.Router();

router.get('/', eitherCtrl.getEither);
router.post('/', eitherCtrl.createEither);

export default router;
