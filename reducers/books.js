const books = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      
      return state;
    
    case 'STORE_FETCHED_BOOKS':
      return action.books;
      
    default:
      return state;
  }
}

export default books;