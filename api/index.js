import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { db } from './db.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser());

app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

db.connect(
  () => {
    app.listen(8800, () => {
      console.log('Server is up and running on PORT 8800');
    });
  },
  (err) => {
    console.log(err);
  }
);
