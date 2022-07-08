import { useContext } from "react";
import {
  MobileMenuContext,
  MobileMenuStateApi,
} from "../../providers/mobile-menu/mobile-menu.provider";

export const useMobileMenu = (): MobileMenuStateApi => {
  const context = useContext(MobileMenuContext) as MobileMenuStateApi;

  if (!context || !context.dispatch) {
    throw new Error("useMobileMenu must be used within MobileMenuProvider.");
  }

  return context;
};
