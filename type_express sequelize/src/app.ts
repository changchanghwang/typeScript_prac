import * as express from 'express';
import * as morgan from 'morgan';
import 'dotenv/config';
import indexRouter from './routes/index';

class Server {
  private App: express.Application;
  constructor() {
    this.App = express();
    this.App.use(express.urlencoded({ extended: true }));
    this.App.use(express.json());
    this.App.use(morgan('dev'));
    this.App.use('/', indexRouter);
  }
  public getInstance(): express.Application {
    return this.App;
  }
}

export default new Server();
