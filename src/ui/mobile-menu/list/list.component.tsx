import { useEffect, useState } from "react";
import { useMobileMenu } from "../../../hooks/use-mobile-menu/use-mobile-menu.hook";
import { useUser } from "../../../hooks/use-user/use-user.hook";
import { toggleMenu } from "../../../providers/mobile-menu/mobile-menu.actions";
import { Item } from "../item/item.component";
import { useStyles } from "./list.styles";

interface MenuItemPayload {
  name: string;
  href: string;
}

export const List = () => {
  const { classes } = useStyles();
  const { dispatch } = useMobileMenu();
  const {
    state: { isLoggedIn },
  } = useUser();
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

  const handleItemClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <ul className={classes.list}>
      {menu.map((item) => (
        <li className={classes.item} key={item.name} onClick={handleItemClick}>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
};
