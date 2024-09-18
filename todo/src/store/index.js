import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo';

const Store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default Store;
