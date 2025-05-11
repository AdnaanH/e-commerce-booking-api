import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { userRouter } from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

// Global middlewares
app.use(helmet());
app.use(compression());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // limit each IP
  standardHeaders: true,
  legacyHeaders: false,
}));

// Routes
app.use('/api/users', userRouter);

// Global error handler
app.use(errorHandler);

export default app;
