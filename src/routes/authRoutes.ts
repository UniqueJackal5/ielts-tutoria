import { Router, Request, Response } from 'express';
import { 
  register, 
  login,
  verifyEmail,
  requestPasswordReset,
  resetPassword
} from '../controllers/authController';

const router = Router();

// POST /api/auth/register
router.post('/register', (req: Request, res: Response) => {
  register(req, res).catch((err: Error) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });
});

// POST /api/auth/login
router.post('/login', (req: Request, res: Response) => {
  login(req, res).catch((err: Error) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });
});

// GET /api/auth/verify/:token
router.get('/verify/:token', (req: Request, res: Response) => {
  verifyEmail(req, res).catch((err: Error) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });
});

// POST /api/auth/request-password-reset
router.post('/request-password-reset', (req: Request, res: Response) => {
  requestPasswordReset(req, res).catch((err: Error) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });
});

// POST /api/auth/reset-password
router.post('/reset-password', (req: Request, res: Response) => {
  resetPassword(req, res).catch((err: Error) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });
});

export default router;
