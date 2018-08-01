export function selectBook(book) {
  //select book is an ActionCreator, needs to return an action
  //an object with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}