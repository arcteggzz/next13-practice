// "use client";
//you might not have to put that

import { createSlice } from "@reduxjs/toolkit";
import { MobileNavStateType } from "../../../types/mobileNavState";
import { RootStateType } from "../../app/store";

const initialState: MobileNavStateType = {
  navIsOpen: false,
};

const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState,
  reducers: {
    openNavbar: (state) => {
      state.navIsOpen = true;
    },
    closeNavbar: (state) => {
      state.navIsOpen = false;
    },
  },
});

export const { openNavbar, closeNavbar } = mobileNavSlice.actions;

export default mobileNavSlice.reducer;

export const currentMobileNavState = (state: RootStateType) =>
  state.mobileNav.navIsOpen;
