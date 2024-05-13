import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: window.innerWidth <= 600, // Check for mobile size on initial load
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

export const { updateIsMobile } = isMobileSlice.actions; // Export updateIsMobile action creator

export default isMobileSlice.reducer;
