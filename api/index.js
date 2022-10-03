import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import mysql from 'mysql';
import { db } from './db.js';
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

db.connect(
  (data) => {
    app.listen(8800, () => {
      console.log('Connected!');
      console.log(data);
    });
  },
  (err) => {
    console.log(err);
  }
);
