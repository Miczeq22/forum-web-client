import { Item } from "../item/item.component";
import { useStyles } from "./list.styles";
import { useMenuList } from "./use-menu-list.hook";

export const List = () => {
  const { classes } = useStyles();
  const { menu, onItemClick } = useMenuList();

  return (
    <ul className={classes.list}>
      {menu.map((item) => (
        <li className={classes.item} key={item.name} onClick={onItemClick}>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
};
