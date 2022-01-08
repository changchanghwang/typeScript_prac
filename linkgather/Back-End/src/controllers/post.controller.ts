import { Request, Response, NextFunction } from 'express';
import * as moment from 'moment';
import { getRepository } from 'typeorm';
import { Post } from '../entity/post.entity';
import { crawling } from '../utils/crawling';

class postController {
  public createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { url, title, desc }: postInput = req.body;
      const user = res.locals.user;
      let image = await crawling(url);
      if (!image) {
        image =
          'https://user-images.githubusercontent.com/86486778/148642786-552a0da0-06e2-4a19-bf5c-17a28e184ded.png';
      }
      const uploadTime = moment().format('YYYY-MM-DD');
      await getRepository(Post).save({
        url,
        title,
        desc,
        user,
        image,
        uploadTime,
      });
      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  };
}

export default new postController();
