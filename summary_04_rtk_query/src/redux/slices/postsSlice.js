import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  postsList: [],
  isFetching: false,
  errorMessage: ''
}

const postsSlice = createSlice( {
  name: 'posts',
  initialState,
  reducers: {
    startFetching: (state) => {
      state.isFetching = true;
      state.errorMessage = '';
    },
    postsSuccessfullyFetched: (state, action) => {
      state.isFetching = false;
      state.errorMessage = '';
      state.postsList = action.payload;
    },
    postsErrorFetched: (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload
    }
  }
} );

export const { startFetching, postsErrorFetched, postsSuccessfullyFetched } = postsSlice.actions
export default postsSlice.reducer;