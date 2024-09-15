import express from 'express';

import { AppDataSource } from './data-source';
import handleError from './middlewares/handleError';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// create expresss app
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

// establish database connection and start express server
AppDataSource.initialize()
  .then(async () => {
    app.listen(port, host, () => {
        console.log(`[ ready ] http://${host}:${port}`);
      });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.error("Error during Data Source initialization:",error));

// Handle errors
app.use(handleError);