import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: '',
  username : ''
}

const userSlice = createSlice( {
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload
    }
  }
} );

export const { setName, setUserName } = userSlice.actions
export default userSlice.reducer;