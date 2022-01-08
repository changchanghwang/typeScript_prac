import { Request, Response, NextFunction } from 'express';
import * as passport from 'passport';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err, payload, info) => {
    if (err) return next(err);
    if (!payload) return next(info);
    res.locals.user = payload;
    next();
  })(req, res, next);
};
