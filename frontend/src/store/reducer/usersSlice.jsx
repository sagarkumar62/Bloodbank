import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  isLoggedIn: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser(state, action) {
      const newUser = action.payload;
      // simple uniqueness check by email
      const exists = state.users.find((u) => u.email === newUser.email);
      if (!exists) {
        state.users.push(newUser);
        state.currentUser = newUser;
        state.isLoggedIn = true;
        state.error = null;
      } else {
        state.error = "User with this email already exists";
      }
    },
    login(state, action) {
      const { email, password } = action.payload;
      const user = state.users.find((u) => u.email === email && u.password === password);
      if (user) {
        state.currentUser = user;
        state.isLoggedIn = true;
        state.error = null;
      } else {
        state.error = "Invalid credentials";
        state.isLoggedIn = false;
      }
    },
    logout(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { registerUser, login, logout, clearError } = usersSlice.actions;

export default usersSlice.reducer;
