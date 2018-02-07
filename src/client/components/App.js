import React from 'react';
import { renderRoutes } from 'react-router-config';

import { fetchCurrentUser } from '../actions';

import Header from './Header';

const App = ({ route }) => (
  <div>
    <Header />
    <div>{renderRoutes(route.routes)}</div>
  </div>
);

const loadData = ({ dispatch }) => dispatch(fetchCurrentUser());

export default {
  component: App,
  loadData,
};
