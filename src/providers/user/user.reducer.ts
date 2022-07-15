import { AppAction } from "../../types/app-action";
import { UserState } from "./user.provider";

export const LOGIN = "user/login";

export const LOGOUT = "user/logout";

export type UserAction = AppAction<typeof LOGIN> | AppAction<typeof LOGOUT>;

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
