import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

export default () => {
  // TODO: import reducers
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};
