import { apiSlice } from "../../app/api/apiSlice";
import { apiRoutePaths } from "@/utils";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `${apiRoutePaths.users}`,
    }),

    createMockUser: builder.mutation({
      query: (userObject) => ({
        url: `${apiRoutePaths.users}`,
        method: "POST",
        body: userObject,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useCreateMockUserMutation } = userApiSlice;
