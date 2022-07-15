import { AppAction } from "../../types/app-action";
import { MobileMenuState } from "./mobile-menu.provider";

export const TOGGLE_MENU = "mobile-menu/toggle-menu";

export type MobileMenuAction = AppAction<typeof TOGGLE_MENU>;

export const mobileMenuReducer = (
  state: MobileMenuState,
  action: MobileMenuAction
): MobileMenuState => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    default:
      return state;
  }
};
