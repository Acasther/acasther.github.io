import { createSlice } from "@reduxjs/toolkit";

const mobileSlice = createSlice({
  name: 'isMobile',
  initialState: { isMobile: false },
  reducers: {
    change(state, action) {
      state.isMobile = action.payload.changeToMobile;
    }
  }
})

export const mobileActions = mobileSlice.actions;
export default mobileSlice;