import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import songRoutes from './routes/songRoutes';
import statisticsRoutes from './routes/statisticsRoutes';
import connectToDatabase from './config/database';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swaggerSpec';

dotenv.config();

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/songs', songRoutes);
app.use('/api/stats', statisticsRoutes);

connectToDatabase();

export default app;
