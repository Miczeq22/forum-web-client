import { useEffect, useState } from "react";
import { useMobileMenu } from "../../../hooks/use-mobile-menu/use-mobile-menu.hook";
import { useUser } from "../../../hooks/use-user/use-user.hook";
import { toggleMenu } from "../../../providers/mobile-menu/mobile-menu.actions";

interface MenuItemPayload {
  name: string;
  href: string;
}

export const useMenuList = () => {
  const {
    state: { isLoggedIn },
  } = useUser();

  const { dispatch } = useMobileMenu();

  const [menu, setMenu] = useState<MenuItemPayload[]>([]);

  useEffect(() => {
    if (isLoggedIn) {
      setMenu([
        {
          name: "Home",
          href: "/",
        },
        {
          name: "Profile",
          href: "/profile",
        },
        {
          name: "Logout",
          href: "/logout",
        },
      ]);
    } else {
      setMenu([
        {
          name: "Login",
          href: "/login",
        },
        {
          name: "Register",
          href: "/register",
        },
      ]);
    }
  }, [isLoggedIn]);

  const onItemClick = () => {
    dispatch(toggleMenu());
  };

  return {
    menu,
    onItemClick,
  };
};
