import express from 'express';
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({
    isEnrolled: true,
    courses: [
      { 
        _id: '1',
        title: 'IELTS Writing Masterclass',
        instructor: { firstName: 'John', lastName: 'Doe' }
      }
    ]
  });
});

export default router;