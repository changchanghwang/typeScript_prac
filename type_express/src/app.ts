import * as express from 'express';
import 'dotenv/config';
import routes from './router/index';

class Server {
  private App: express.Application;
  constructor() {
    this.App = express();
    this.App.use(express.urlencoded({ extended: true }));
    this.App.use(express.json());
    this.App.use('/', routes);
  }
  public getInstance(): express.Application {
    return this.App;
  }
}

export default new Server();
