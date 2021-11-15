import * as express from 'express';
import Server from './app';
import 'dotenv/config';
import { db } from './models';
const port = process.env.PORT;

//DB connection
// sequelize
//   .sync({ force: true })
//   .then(async () => {
//     console.log('connection success');
//   })
//   .catch((e) => {
//     console.log('TT : ', e);
//   });
// (async () => {
//   await db.sequelize
//     .sync({ force: false })
//     .then(async () => {
//       console.log('❤sequelize connection success!');
//     })
//     .catch((e) => {
//       console.log('error', e);
//     });
// })();
db.sync({ force: true })
  .then(() => {
    console.log('sequelize connection success!❤');
  })
  .catch((err) => {
    console.error(err);
  });

//server instance
const app: express.Application = Server.getInstance();

//connect server
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
