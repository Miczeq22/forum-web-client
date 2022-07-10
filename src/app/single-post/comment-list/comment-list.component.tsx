import { Comment } from "../comment/comment.component";
import { useStyles } from "./comment-list.styles";

export const CommentList = () => {
  const { classes } = useStyles();

  return (
    <ul className={classes.list}>
      {new Array(5).fill(0).map((_, index) => (
        <li key={`comment-${index}`} className={classes.item}>
          <Comment />
        </li>
      ))}
    </ul>
  );
};
