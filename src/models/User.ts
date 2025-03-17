import mongoose, { Document } from 'mongoose';
import { randomBytes } from 'crypto';
import bcrypt from 'bcryptjs';
import { IUser } from '../types/index';

interface UserDocument extends Omit<Document, '_id' | 'id'>, IUser {
  generateVerificationToken(): string;
  generatePasswordResetToken(): string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  role: { type: String, required: true, enum: ['student', 'teacher', 'admin'], default: 'student' },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String, required: false },
  passwordResetToken: { type: String, required: false },
  passwordResetExpires: { type: Date, required: false }
});

// Add methods to the schema
userSchema.methods.generateVerificationToken = function(): string {
  const token = randomBytes(32).toString('hex');
  this.verificationToken = token;
  return token;
};

userSchema.methods.generatePasswordResetToken = function(): string {
  const token = randomBytes(32).toString('hex');
  this.passwordResetToken = token;
  this.passwordResetExpires = Date.now() + 3600000; // 1 hour
  return token;
};

userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Hash password before saving
userSchema.pre('save', async function(next) {
  try {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (error) {
    console.error('Password hashing error:', error);
    next(new Error('Password encryption failed'));
  }
});

userSchema.index({ email: 1 }, { unique: true });

export default mongoose.model<UserDocument>('User', userSchema);
