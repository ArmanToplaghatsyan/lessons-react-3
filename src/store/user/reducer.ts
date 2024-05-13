import { data } from './state';

export const userReduser = (state = data, action: any) => {
  state = { ...state };

  switch (action.type) {
    case 'addUser':
      state.users.push(action.payload);
      break;
    case 'deleteUserById':
      state.users = state.users.filter((elm) => elm.id != action.payload);
      break;
    case 'findUserById':
      const us = state.users.find((elm) => elm.id == action.payload);
      if (us) {
        state.user = us;
      }
      break;
  }
  return state;
};
