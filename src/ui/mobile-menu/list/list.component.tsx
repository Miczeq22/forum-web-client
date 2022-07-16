import { Accordion } from "@mantine/core";
import { Item } from "../item/item.component";
import { useStyles } from "./list.styles";
import { useMenuList } from "./use-menu-list.hook";

export const List = () => {
  const { classes } = useStyles();
  const { menu, onItemClick } = useMenuList();

  return (
    <ul className={classes.list}>
      {menu.map((item) =>
        item.items ? (
          <Accordion
            className={classes.accordion}
            classNames={{
              label: classes.accordionLabel,
            }}
            iconPosition="right"
          >
            <Accordion.Item label={item.name} className={classes.accordionItem}>
              {item.items.map((subItem) => (
                <li
                  className={classes.item}
                  key={item.name}
                  onClick={onItemClick}
                >
                  <Item {...subItem} />
                </li>
              ))}
            </Accordion.Item>
          </Accordion>
        ) : (
          <li className={classes.item} key={item.name} onClick={onItemClick}>
            <Item {...item} />
          </li>
        )
      )}
    </ul>
  );
};
