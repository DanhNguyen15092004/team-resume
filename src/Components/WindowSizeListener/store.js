import { configureStore } from '@reduxjs/toolkit';
import isMobileReducer from './mobileSlice';

const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
  },
});
export default store;
