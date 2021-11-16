import * as express from 'express';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import 'dotenv/config';
import indexRouter from './routes/index';

class Server {
  private app: express.Application;
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.app.use('/', indexRouter);
  }
  public getInstance(): express.Application {
    return this.app;
  }
  private initializeMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
}

export default new Server();
