import { apiSlice } from "../../app/api/apiSlice";
import { apiRoutePaths } from "@/utils";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `${apiRoutePaths.auth.login}`,
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${apiRoutePaths.auth.logout}`,
        method: "POST",
      }),
    }),
    refreshAuthToken: builder.query({
      query: () => `${apiRoutePaths.auth.refresh}`,
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshAuthTokenQuery } =
  authApiSlice;
