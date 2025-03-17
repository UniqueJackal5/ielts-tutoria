import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { AuthenticatedRequest, JwtPayload, IUser } from '../types';
import { Document } from 'mongoose';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret') as JwtPayload;
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Safely convert Mongoose document to plain object and attach to request
    (req as AuthenticatedRequest).user = user.toObject ? user.toObject() : user as unknown as IUser;

    next();
  } catch (error: any) {
    console.error(error);
    res.status(401).json({ message: 'Token is not valid', error: error.message });
  }
};

export default authMiddleware;
