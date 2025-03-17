import { Request, Response } from 'express';
import File from '../models/File';
import fs from 'fs';
import path from 'path';
import { AuthenticatedRequest } from '../types';

// Upload file
const uploadFile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const { originalname, mimetype, size, path: filePath } = req.file;
    const userId = req.user?.id;

    const newFile = new File({
      filename: originalname,
      path: filePath,
      size,
      mimetype,
      owner: userId
    });

    await newFile.save();

    res.status(201).json({
      message: 'File uploaded successfully',
      file: {
        id: newFile._id,
        filename: newFile.filename,
        size: newFile.size,
        mimetype: newFile.mimetype
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Download file
const downloadFile = async (req: Request, res: Response) => {
  try {
    const fileId = req.params.id;
    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    const filePath = path.resolve(file.path);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found on server' });
    }

    res.download(filePath, file.filename);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user files
const getUserFiles = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const files = await File.find({ owner: userId })
      .select('filename size mimetype createdAt')
      .sort({ createdAt: -1 });

    res.json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete file
const deleteFile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const fileId = req.params.id;
    const userId = req.user?.id;

    const file = await File.findOne({ _id: fileId, owner: userId });
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Remove file from filesystem
    fs.unlinkSync(file.path);

    // Remove file from database
    await File.findByIdAndDelete(fileId);

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export {
  uploadFile,
  downloadFile,
  getUserFiles,
  deleteFile
};
