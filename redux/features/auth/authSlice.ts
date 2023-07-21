// "use client";
//you might not have to put that

import { createSlice } from "@reduxjs/toolkit";
import { AuthStateType } from "../../../types/authState";
import { RootStateType } from "../../app/store";

const initialState = {
  userName: null,
  accessToken: null,
  userImage: null,
  userId: null,
  userEmail: null,
  userPhoneNumber: null,
} as AuthStateType;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setCredentials: (state, action) => {
    //   const {
    //     username,
    //     accessToken,
    //     userImage,
    //     userId,
    //     userEmail,
    //     userPhoneNumber,
    //   } = action.payload;
    //   state.userName = username;
    //   state.accessToken = accessToken;
    //   state.userImage = userImage;
    //   state.userId = userId;
    //   state.userEmail = userEmail;
    //   state.userPhoneNumber = userPhoneNumber;
    // },
    setCredentials: (state, action) => {
      const { _username, accessToken, _email, _id, _personalCode } =
        action.payload;
      state.userName = _username;
      state.accessToken = accessToken;
      state.userId = _id;
      state.userEmail = _email;
      state.userPhoneNumber = _personalCode;
    },
    resetCredentials: (state) => {
      state.userName = null;
      state.accessToken = null;
      state.userImage = null;
      state.userId = null;
      state.userEmail = null;
      state.userPhoneNumber = null;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { setCredentials, resetCredentials, updateAccessToken } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUserName = (state: RootStateType) =>
  state.auth.userName;
export const selectCurrentAccessToken = (state: RootStateType) =>
  state.auth.accessToken;
export const selectCurrentUserImage = (state: RootStateType) =>
  state.auth.userImage;
export const selectCurrentUserId = (state: RootStateType) => state.auth.userId;
export const selectCurrentUserEmail = (state: RootStateType) =>
  state.auth.userEmail;
export const selectCurrentUserPhoneNumber = (state: RootStateType) =>
  state.auth.userPhoneNumber;
