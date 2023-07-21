import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/utils/apiRoutePaths";
import { RootStateType } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    //get the current state from the store
    const rootState: RootStateType = getState() as RootStateType;
    const token: string | null = rootState.auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // endpoints: (builder) => ({}),
  endpoints: () => ({}),
});
