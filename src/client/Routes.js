import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';
import App from './components/App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
      },
    ],
  },
];
