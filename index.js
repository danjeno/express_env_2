import express from 'express';
import dotenv from "dotenv";
import connectionToMongo from './utils/connection.js';
import createAnimalRoute from './routes/createAnimalRoute.js';

const app = express();
const port = 3002;

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api", createAnimalRoute);

app.listen(port, () => {
  connectionToMongo();
  console.log(`Example app listening on port ${port}`);
});