import { Burger } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useMobileMenu } from "../../hooks/use-mobile-menu/use-mobile-menu.hook";
import { toggleMenu } from "../../providers/mobile-menu/mobile-menu.actions";
import { Logo } from "../logo/logo";
import { useStyles } from "./navbar.styles";
import { NavigationList } from "./navigation-list/navigation-list.component";

export const Navbar = () => {
  const {
    state: { isMenuOpen },
    dispatch,
  } = useMobileMenu();
  const { theme, classes } = useStyles();

  const { width } = useViewportSize();

  return (
    <nav className={classes.navbar}>
      <Logo />
      {width <= theme.breakpoints.sm && (
        <Burger opened={isMenuOpen} onClick={() => dispatch(toggleMenu())} />
      )}
      {width > theme.breakpoints.sm && (
        <NavigationList />
      )}
    </nav>
  );
};
