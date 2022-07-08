import { Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import { TextPost } from "../text-post/text-post.component";
import { useStyles } from "./post-list.styles";

export const PostList = () => {
  const { classes } = useStyles();

  return (
    <ul className={classes.list}>
      {new Array(5).fill(0).map((_, index) => (
        <Anchor component={Link} to="/post" underline={false}>
          <li className={classes.listItem} key={index}>
            <TextPost />
          </li>
        </Anchor>
      ))}
    </ul>
  );
};
