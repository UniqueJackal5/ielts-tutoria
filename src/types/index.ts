import { Request } from 'express';

// Basic type definitions
export interface IUser {
  _id?: any; // MongoDB ObjectId
  courses: any[];
  id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  isVerified: boolean;
  verificationToken?: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
}

export interface IFile {
  id: string;
  filename: string;
  path: string;
  size: number;
  owner: string;
  createdAt: Date;
}

export interface JwtPayload {
  id: string;
  role: string;
  iat?: number; // Added by JWT library
  exp?: number; // Added by JWT library
}

export interface AuthenticatedRequest extends Request {
  user?: IUser;
}
