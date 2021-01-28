import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './router/Stack';
import rootReducer from './reducers';
import { fetchAllBooks } from './database/api';
import { storeFetchedBooks } from './actions';

//myStore.subscribe(() => console.log(myStore.getState()));

const fetchMiddleware = (store) => (next) => (action) => {
  
  if (action.type === 'FETCH_BOOKS' && store.getState().books.length === 0) {
    fetchAllBooks().then((books) => {
      store.dispatch(storeFetchedBooks(books));
    });
  }

  return next(action);
};

let myStore = createStore(rootReducer, applyMiddleware(fetchMiddleware));

const App = () => {
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
