import express from 'express';
import dotenv from "dotenv";
import connectionToMongo from './utils/connection.js';
import bigAnimalRoute from './routes/bigAnimalRoute.js';
import favoritePlaceRoute from './routes/favoritePlaceRoute.js';

const app = express();
const port = 3002;

dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/animal', bigAnimalRoute);
app.use('/api/favoriteplace', favoritePlaceRoute);

app.listen(port, () => {
  connectionToMongo();
  console.log(`Example app listening on port ${port}`);
});