import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { sendVerificationEmail, sendPasswordResetEmail } from '../services/emailService';
import { IUser, JwtPayload } from '../types';
import { Document } from 'mongoose';


// Register new user
const register = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName, role } = req.body;
    
    // Validate input
    if (!email || !password || !firstName || !role) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({ 
      email, 
      password, 
      firstName,
      lastName,
      role 
    });

    // Generate verification token
    const verificationToken = user.generateVerificationToken();
    try {
      console.log('Attempting to save user:', user);
      await user.save();
      console.log('User saved successfully');
    } catch (error) {
      console.error('User save error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        userData: { email: user.email, firstName: user.firstName }
      });
      if (error instanceof Error && 'code' in error && error.code === 11000) {
        return res.status(409).json({
          message: 'Email already registered',
          suggestion: 'If you already have an account, try resetting your password'
        });
      }
      console.error('User save error:', error);
      return res.status(500).json({
        message: 'Failed to create user account',
        ...(process.env.NODE_ENV === 'development' && { 
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        })
      });
    }

    try {
      console.log('Sending verification email to:', user.email);
      await sendVerificationEmail(user.email, verificationToken);
      console.log('Verification email sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', {
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
        recipient: user.email,
        token: verificationToken
      });
      throw emailError; // Rethrow to trigger the outer catch block
    }

    // Generate JWT token
    // Return response without token since user needs to verify email first
    res.status(201).json({ 
      message: 'Registration successful. Please check your email to verify your account.',
      userId: user._id
    });
  } catch (error) {
    console.error('Registration error:', error);
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? (error instanceof Error ? error.message : 'Unknown error')
      : 'Registration failed due to server error';
    
    res.status(500).json({
      message: `Registration failed: ${errorMessage}`,
      ...(process.env.NODE_ENV === 'development' && { stack: error instanceof Error ? error.stack : undefined })
    });
  }
};

// Login user
const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials: User not found' });
    }

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(403).json({ 
        message: 'Please verify your email address before logging in',
        userId: user._id
      });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials: Incorrect password' });
    }

    // Generate JWT token
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);

    res.json({ 
      _id: user._id,
      email: user.email,
      role: user.role,
      token,
      refreshToken
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

const generateRefreshToken = (user: IUser | Document) => {
  const payload: JwtPayload = {
    id: user._id?.toString() || (user as any).id || '',
    role: (user as IUser).role
  };
  
  return jwt.sign(
    payload,
    process.env.JWT_SECRET || 'your_jwt_secret',
    { expiresIn: '30d' }
  );
};

// Verify email
const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({ message: 'Invalid verification token' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    try {
      console.log('Attempting to save user:', user);
      await user.save();
      console.log('User saved successfully');
    } catch (error) {
      console.error('User save error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        userData: { email: user.email, firstName: user.firstName }
      });
      if (error instanceof Error && 'code' in error && error.code === 11000) {
        return res.status(409).json({
          message: 'Email already registered',
          suggestion: 'If you already have an account, try resetting your password'
        });
      }
      console.error('User save error:', error);
      return res.status(500).json({
        message: 'Failed to create user account',
        ...(process.env.NODE_ENV === 'development' && { 
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        })
      });
    }

    res.json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ message: 'Server error during email verification' });
  }
};

// Request password reset
const requestPasswordReset = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = user.generatePasswordResetToken();
    try {
      console.log('Attempting to save user:', user);
      await user.save();
      console.log('User saved successfully');
    } catch (error) {
      console.error('User save error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        userData: { email: user.email, firstName: user.firstName }
      });
      if (error instanceof Error && 'code' in error && error.code === 11000) {
        return res.status(409).json({
          message: 'Email already registered',
          suggestion: 'If you already have an account, try resetting your password'
        });
      }
      console.error('User save error:', error);
      return res.status(500).json({
        message: 'Failed to create user account',
        ...(process.env.NODE_ENV === 'development' && { 
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        })
      });
    }

    // Send password reset email
    await sendPasswordResetEmail(user.email, resetToken);
    res.json({ 
      message: 'Password reset instructions sent to your email'
    });
  } catch (error) {
    console.error('Password reset request error:', error);
    res.status(500).json({ message: 'Server error during password reset request' });
  }
};

// Reset password
const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;
    
    const user = await User.findOne({ 
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() }
    });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }

    user.password = newPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    try {
      console.log('Attempting to save user:', user);
      await user.save();
      console.log('User saved successfully');
    } catch (error) {
      console.error('User save error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        userData: { email: user.email, firstName: user.firstName }
      });
      if (error instanceof Error && 'code' in error && error.code === 11000) {
        return res.status(409).json({
          message: 'Email already registered',
          suggestion: 'If you already have an account, try resetting your password'
        });
      }
      console.error('User save error:', error);
      return res.status(500).json({
        message: 'Failed to create user account',
        ...(process.env.NODE_ENV === 'development' && { 
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        })
      });
    }

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ message: 'Server error during password reset' });
  }
};

const generateToken = (user: IUser | Document) => {
  const payload: JwtPayload = {
    id: user._id?.toString() || (user as any).id || '',
    role: (user as IUser).role
  };
  
  return jwt.sign(
    payload,
    process.env.JWT_SECRET || 'your_jwt_secret',
    { expiresIn: '30d' }
  );
};

export {
  register,
  login,
  verifyEmail,
  requestPasswordReset,
  resetPassword
};
