import { Router } from 'express';
import { 
  uploadFile, 
  downloadFile, 
  getUserFiles, 
  deleteFile 
} from '../controllers/fileController';
import authMiddleware from '../middleware/authMiddleware';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const router = Router();

// Apply auth middleware to all routes
router.use((req, res, next) => {
  authMiddleware(req, res, next).catch(next);
});

// POST /api/files/upload
router.post('/upload', upload.single('file'), (req, res) => {
  uploadFile(req, res).catch(err => {
    console.error(err);
    res.status(500).json({ message: 'File upload failed' });
  });
});

// GET /api/files
router.get('/', (req, res) => {
  getUserFiles(req, res).catch(err => {
    console.error(err);
    res.status(500).json({ message: 'Failed to get files' });
  });
});

// GET /api/files/:id/download
router.get('/:id/download', (req, res) => {
  downloadFile(req, res).catch(err => {
    console.error(err);
    res.status(500).json({ message: 'File download failed' });
  });
});

// DELETE /api/files/:id
router.delete('/:id', (req, res) => {
  deleteFile(req, res).catch(err => {
    console.error(err);
    res.status(500).json({ message: 'File deletion failed' });
  });
});

export default router;
