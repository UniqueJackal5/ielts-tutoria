import dotenv from 'dotenv';

import { connectDB, disconnectDB } from '../config/db';
import User from '../models/User';
import bcrypt from 'bcryptjs';

const createTestStudent = async () => {
  try {
    await connectDB();

    const testUser = {
      email: 'test.student@example.com',
      password: 'student123',
      firstName: 'Test',
      lastName: 'Student',
      role: 'student',
      isVerified: true
    };

    const existingUser = await User.findOne({ email: testUser.email });
    if (!existingUser) {
      await User.create(testUser);
      console.log('Test student account created successfully');
    }

    // Auto-cleanup after 2 hours
    setTimeout(async () => {
      await User.deleteOne({ email: testUser.email });
      await disconnectDB();
      console.log('Test account cleaned up');
    }, 7200000);

  } catch (error) {
    console.error('Error seeding test account:', error);
    process.exit(1);
  }
};

const createTestTeacher = async () => {
  try {
    await connectDB();

    const testUser = {
      email: 'test.teacher@example.com',
      password: 'teacher123',
      firstName: 'Test',
      lastName: 'Teacher',
      role: 'teacher',
      isVerified: true
    };

    const existingUser = await User.findOne({ email: testUser.email });
    if (!existingUser) {
      await User.create(testUser);
      console.log('Test teacher account created successfully');
    }

    // Auto-cleanup after 2 hours
    setTimeout(async () => {
      await User.deleteOne({ email: testUser.email });
      await disconnectDB();
      console.log('Test teacher account cleaned up');
    }, 7200000);

  } catch (error) {
    console.error('Error seeding test teacher account:', error);
    process.exit(1);
  }
};

createTestStudent();
createTestTeacher();