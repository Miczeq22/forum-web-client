import { Menu, Text, UnstyledButton } from "@mantine/core";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useMenuList } from "../../mobile-menu/list/use-menu-list.hook";
import { useStyles } from "./navigation-list.styles";

export const NavigationList = () => {
  const { classes, cx } = useStyles();
  const { menu } = useMenuList();

  return (
    <ul className={classes.list}>
      {menu.map((item) =>
        item.items ? (
          <li key={item.name} className={classes.item}>
            <Menu
              trigger="hover"
              control={
                <UnstyledButton className={classes.menuButton}>
                  <Text
                    className={cx(classes.menuButtonText, classes.itemText)}
                  >
                    {item.name}
                  </Text>{" "}
                  <FiChevronDown />
                </UnstyledButton>
              }
              classNames={{
                body: classes.dropdown,
              }}
            >
              {item.items.map((subItem) => (
                <UnstyledButton
                  component={Link}
                  to={subItem.href!}
                  key={subItem.name}
                >
                  <Menu.Item key={subItem.name}>
                    <Text className={classes.itemText}>{subItem.name}</Text>
                  </Menu.Item>
                </UnstyledButton>
              ))}
            </Menu>
          </li>
        ) : (
          <li key={item.name} className={classes.item}>
            <UnstyledButton component={Link} to={item.href!}>
              <Text className={classes.itemText}>{item.name}</Text>
            </UnstyledButton>
          </li>
        )
      )}
    </ul>
  );
};
