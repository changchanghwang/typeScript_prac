import 'reflect-metadata';
import * as express from 'express';
import Server from './app';
import dbc from './model/dbc';
import 'dotenv/config';

const port = process.env.PORT;

// db Connect
dbc.connection();

// server instance
const app: express.Application = Server.getInstance();

// connect server
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
