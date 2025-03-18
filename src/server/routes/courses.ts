import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      _id: '1',
      title: 'IELTS Writing Masterclass',
      instructor: 'John Doe',
      schedule: 'Mon/Wed 10:00 AM'
    }
  ]);
});

export default router;