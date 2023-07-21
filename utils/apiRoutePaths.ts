export const BASE_URL = "http://localhost:3500";

const apiRoutePaths = {
  auth: {
    register: "/register",
    login: "/auth",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  users: "/users",
};

export default apiRoutePaths;
