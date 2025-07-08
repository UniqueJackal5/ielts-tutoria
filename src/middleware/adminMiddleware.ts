import { Request, Response, NextFunction } from 'express';
import { IUser } from '../types';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: Admins only' });
  }
};
