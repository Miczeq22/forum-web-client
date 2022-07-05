import { Button, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { FaBars } from "react-icons/fa";
import { Logo } from "../logo/logo";
import { useStyles } from "./navbar.styles";

export const Navbar = () => {
  const { theme, classes } = useStyles();

  const { width } = useViewportSize();

  return (
    <nav className={classes.navbar}>
      <Logo />
      {width <= theme.breakpoints.sm && (
        <Button variant="subtle">
          <FaBars />
        </Button>
      )}
    </nav>
  );
};
