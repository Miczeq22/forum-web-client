import { MobileMenuAction, TOGGLE_MENU } from "./mobile-menu.reducer";

export const toggleMenu = (): MobileMenuAction => ({
  type: TOGGLE_MENU,
});
