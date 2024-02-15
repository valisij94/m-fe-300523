import { configureStore } from "@reduxjs/toolkit";

import userReducer from  './slices/userSlice.js';
import postsReducer from './slices/postsSlice.js';
import { postsApi } from "./slices/apiSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
