import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import Routes from './client/Routes';
import { renderer, createStore } from './helpers';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  matchRoutes(Routes, req.path).map(
    ({ route }) => route.loadData && route.loadData(),
  );

  res.send(renderer(req, store));
});

app.listen(3000, () => console.log('Listening on port 3000'));
