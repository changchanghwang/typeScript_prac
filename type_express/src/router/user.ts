import * as express from 'express';
import userCtrl from '../controllers/user.controller';
const router = express.Router();

router.get('/', userCtrl.getUser);
router.post('/', userCtrl.createUser);

export default router;
