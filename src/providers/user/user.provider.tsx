import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { authStorage } from "../auth/auth.storage";
import { UserAction, userReducer } from "./user.reducer";

export interface UserState {
  isLoggedIn: boolean;
}

export interface UserStateApi {
  state: UserState;
  dispatch: Dispatch<UserAction>;
}

export const defaultUserState: UserState = {
  isLoggedIn: false,
};

export const UserContext = createContext<UserState | UserStateApi>(
  defaultUserState
);

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, {
    isLoggedIn: Boolean(
      authStorage.getAccessToken() && authStorage.getRefreshToken()
    ),
  });

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
