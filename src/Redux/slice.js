import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "users",

  initialState: {
    data: []
  },

  reducers: {
    postUsers: (state, users) => {
      state.data = users.payload;
    },

    deleteUser: (state, deleteId) => {
      const arr = state.data.filter(item => item.login.uuid !== deleteId.payload);
      state.data = arr;
    },

    changeName: (state, action) => {
      const arr = state.data.map(item => {
        if (item.login.uuid === action.payload.user.login.uuid) {
          return {
            ...item,
             name: {
              ...item.name,
              first: action.payload.newName
             }
          }
        } 
        return item;
      })
      state.data = arr;
    }
  }
});

export const { postUsers, deleteUser, changeName } = slice.actions;

export default slice.reducer;
