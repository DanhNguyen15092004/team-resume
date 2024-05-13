import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: window.innerWidth <= 600, 
};
export const isMobileSlice = createSlice({
  name: 'isMobile',
  initialState,
  reducers: {
    updateIsMobile: (state) => {
      state.value = window.innerWidth <= 600;
    },
  },
});
export const { updateIsMobile } = isMobileSlice.actions;

export default isMobileSlice.reducer;
