import express from 'express';
import cors from 'cors';
import enrollmentRouter from './routes/enrollment';
import coursesRouter from './routes/courses';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/api/enrollment', enrollmentRouter);
app.use('/api/courses', coursesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});