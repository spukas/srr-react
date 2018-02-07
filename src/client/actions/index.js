import { FETCH_USERS, FETCH_CURRENT_USER } from './types';

const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  return dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  return dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};

export { fetchUsers, fetchCurrentUser };
