import { createContext, Dispatch, ReactNode, useReducer } from "react";
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
  const [state, dispatch] = useReducer(userReducer, defaultUserState);

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
