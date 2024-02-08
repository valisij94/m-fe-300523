import { configureStore } from "@reduxjs/toolkit";

import userReducer from  './slices/userSlice.js';
import postsReducer from './slices/postsSlice.js';

// Это заглушка, нам предстоит ее заменить
export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer
  }
});
