import { configureStore } from '@reduxjs/toolkit';
import donorReducer from './reducer/donorSlice';
import storiesReducer from './reducer/storiesSlice';
import usersReducer from './reducer/usersSlice';

export const store = configureStore({
	reducer: {
		donor: donorReducer,
		stories: storiesReducer,
		users: usersReducer,
	},
});