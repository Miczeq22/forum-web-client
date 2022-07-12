import { useMobileMenu } from "../../../hooks/use-mobile-menu/use-mobile-menu.hook";
import { toggleMenu } from "../../../providers/mobile-menu/mobile-menu.actions";
import { Item } from "../item/item.component";
import { useStyles } from "./list.styles";

export const List = () => {
  const { classes } = useStyles();
  const { dispatch } = useMobileMenu();

  const menu = [
    {
      name: 'Login',
      href: '/login'
    },
    {
      name: 'Register',
      href: '/register'
    },
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
      href: "#",
    },
  ];

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
