import * as express from 'express';
import Routers from './interfaces/router.interface';
import indexRouter from './routers';
import dbConnect from './entity';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as compression from 'compression';
import userRouter from './routers/user';

class Server {
  public app: express.Application;

  constructor(routers: Routers[]) {
    this.app = express();
    this.connectDatabase();
    this.middleware();
    this.initializeRouter(routers);
  }

  private initializeRouter(routers: Routers[]) {
    routers.forEach((router) => {
      this.app.use('/', router.router);
    });
  }

  public getInstance(): express.Application {
    return this.app;
  }

  private middleware() {
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  private connectDatabase() {
    dbConnect.connection();
  }
}

export default new Server([new indexRouter(), new userRouter()]);
