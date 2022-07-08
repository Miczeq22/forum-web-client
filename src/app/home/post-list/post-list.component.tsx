import { TextPost } from "../text-post/text-post.component";
import { useStyles } from "./post-list.styles";

export const PostList = () => {
  const { classes } = useStyles();

  return (
    <ul className={classes.list}>
      {new Array(5).fill(0).map((_, index) => (
        <li className={classes.listItem} key={`post-item-${index}`}>
          <TextPost />
        </li>
      ))}
    </ul>
  );
};
