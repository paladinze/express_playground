import express, { Request, Response, NextFunction} from 'express';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.send('<h1>Hello from Ze!!!</h1>')
})

app.listen(2000, () => {
  console.log('listening at port ' + 2000)
})