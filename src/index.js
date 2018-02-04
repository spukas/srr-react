import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import Routes from './client/Routes';
import { renderer, createStore } from './helpers';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  // returns an array of promises from api requests
  const promises = matchRoutes(Routes, req.path).map(
    ({ route }) => route.loadData && route.loadData(store),
  );

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));
