import { Drawer } from "@mantine/core";
import { useMobileMenu } from "../../hooks/use-mobile-menu/use-mobile-menu.hook";
import { useStyles } from "./mobile-menu.styles";

export const MobileMenu = () => {
  const {
    state: { isMenuOpen },
  } = useMobileMenu();
  const { classes } = useStyles();

  return (
    <Drawer
      size="full"
      opened={isMenuOpen}
      onClose={() => {}}
      className={classes.menu}
      withCloseButton={false}
    >
      qwe
    </Drawer>
  );
};
