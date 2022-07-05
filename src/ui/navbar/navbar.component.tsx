import { Burger } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Logo } from "../logo/logo";
import { useStyles } from "./navbar.styles";

export const Navbar = () => {
  const { theme, classes } = useStyles();

  const { width } = useViewportSize();

  return (
    <nav className={classes.navbar}>
      <Logo />
      {width <= theme.breakpoints.sm && <Burger opened={false} />}
    </nav>
  );
};
