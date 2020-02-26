import express, { ErrorRequestHandler } from 'express';
import { json } from 'body-parser';
import profRoutes from './routes/prof';

const app = express();

app.use(json());

app.use('/profs', profRoutes);

const myErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({ message: err.message });
}

app.use(myErrorHandler);

app.listen(2000);