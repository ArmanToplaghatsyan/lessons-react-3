import { data } from './state';

export const bookReducer = (state = data, action: any) => {
  state = { ...state };

  switch (action.type) {
    case 'addBook':
      state.books.push(action.payload);
      break;

    case 'deleteBookById':
      state.books = state.books.filter((elm) => elm.id != action.payload);
      break;

    case 'deleteBookByUserId':
      state.books = state.books.filter((elm) => elm.userId != action.payload);
      break;

    case 'findBookById':
      const boo = state.books.find((elm) => elm.id == action.payload);
      if (boo) {
        state.book = boo;
      }
      break;

    case 'addComment': //{id, text}
      const boo1 = state.books.find((elm) => elm.id == action.payload.id);
      if (boo1) {
        boo1.comment.push(action.payload.text);
      }
      break;
  }

  return state;
};
