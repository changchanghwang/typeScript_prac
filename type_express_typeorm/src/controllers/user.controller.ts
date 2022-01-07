import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/user.entity';
import { checkPw } from '../utils/pwCheck';
import * as bcrypt from 'bcrypt';
import 'dotenv/config';
const salt = process.env.SALT;

class userController {
  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    const { email, name, password, passwordCheck }: signup = req.body;
    const exUser = User.findOneByEmail(email);
    if (exUser) {
      if (checkPw(password, passwordCheck)) {
        const hashedPw = bcrypt.hashSync(password, salt);
        await getRepository(User).save({
          email,
          name,
          password: hashedPw,
        });
        return res.status(200).json({ success: true });
      }
      return res
        .status(400)
        .json({ success: false, msg: '비밀번호를 확인해주세요' });
    }
    return res
      .status(400)
      .json({ success: false, msg: '아이디가 중복됩니다.' });
  };
}

export default new userController();
