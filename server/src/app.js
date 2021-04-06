import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mealRoutes from './routes/mealRoutes.js';
import userRoutes from './routes/userRoutes.js';
import logRoutes from './routes/logRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));

app.use('/meals', mealRoutes);
app.use('/auth', userRoutes);
app.use('/logs', logRoutes)

const { CONNECTION_URI } = process.env;
const PORT = 5000 || process.env.PORT;

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error(error));

mongoose.set('useFindAndModify', true);
