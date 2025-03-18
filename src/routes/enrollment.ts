import express from 'express';
import { AuthenticatedRequest } from '../types';
import User from '../models/User';

const router = express.Router();

router.get('/status', async (req: AuthenticatedRequest, res) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Not authenticated' });
    return;
    }

    const user = await User.findById(req.user._id)
      .populate({
        path: 'courses',
        select: 'title instructor',
        populate: {
          path: 'instructor',
          select: 'firstName lastName'
        },
        options: { lean: true }
      })
      .select('courses')
      .orFail(new Error('User not found'));

    

    res.json({
      isEnrolled: user.courses.length > 0,
      courses: user.courses
    });
  } catch (error) {
    console.error('Enrollment check error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ 
      message: 'Enrollment check failed',
      details: errorMessage
    });
  }
});

export default router;