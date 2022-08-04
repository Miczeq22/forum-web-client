import { TextPost } from "../text-post/text-post.component";
import { usePosts } from "./hooks/use-posts.hook";
import { useStyles } from "./post-list.styles";

export const PostList = () => {
  const { posts } = usePosts({});
  const { classes } = useStyles();

  return (
    <ul className={classes.list}>
      {posts.map((post) => (
        <li className={classes.listItem} key={post.id}>
          <TextPost {...post} />
        </li>
      ))}
    </ul>
  );
};
