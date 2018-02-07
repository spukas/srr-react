import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div>
    <h1>Header Component should be here</h1>
    <div>{renderRoutes(route.routes)}</div>
  </div>
);

export default {
  component: App,
};
