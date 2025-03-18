import mongoose, { Document } from 'mongoose';

interface ICourse extends Document {
  title: string;
  instructor: mongoose.Schema.Types.ObjectId;
}

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

export default mongoose.model<ICourse>('Course', courseSchema);