import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
