import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './Header';

const App = ({ route }) => (
  <div>
    <Header />
    <div>{renderRoutes(route.routes)}</div>
  </div>
);

export default {
  component: App,
};
