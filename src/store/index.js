import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from './mobile-slice.js';

const store = configureStore({
  reducer:{ 
    mobile: mobileSlice.reducer
  }
})

export default store;
export const actions = mobileSlice.actions;