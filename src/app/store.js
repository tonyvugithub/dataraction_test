import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authenticate/authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
