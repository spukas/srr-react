import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from './client/Routes';
import { renderer, createStore } from './helpers';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    },
  }),
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);

  // returns an array of promises from api requests
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => route.loadData && route.loadData(store))
    .map(
      promise =>
        promise &&
        new Promise((resolve, reject) => promise.then(resolve).catch(resolve)),
    );

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(303, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));
