import express from 'express';
import { renderer, createStore } from './helpers';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(3000, () => console.log('Listening on port 3000'));
