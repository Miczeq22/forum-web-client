import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { MobileMenuAction, mobileMenuReducer } from "./mobile-menu.reducer";

export interface MobileMenuState {
  isMenuOpen: boolean;
}

export interface MobileMenuStateApi {
  state: MobileMenuState;
  dispatch: Dispatch<MobileMenuAction>;
}

export const defaultMobileMenuState: MobileMenuState = {
  isMenuOpen: false,
};

export const MobileMenuContext = createContext<
  MobileMenuState | MobileMenuStateApi
>(defaultMobileMenuState);

interface Props {
  children: ReactNode;
}

export const MobileMenuProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    mobileMenuReducer,
    defaultMobileMenuState
  );

  return (
    <MobileMenuContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
