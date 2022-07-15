import { LOGIN, LOGOUT, UserAction } from "./user.reducer";

export const login = (): UserAction => ({
  type: LOGIN,
});

export const logout = (): UserAction => ({
  type: LOGOUT,
});
