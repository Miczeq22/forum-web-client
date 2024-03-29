import { PostDTO } from "../../../domain/post.dto";
import { useInfiniteScroll } from "../../../hooks/use-infinite-scroll/use-infinite-scroll.hook";
import { TextPost } from "../text-post/text-post.component";
import { useStyles } from "./post-list.styles";
import autoAnimate from "@formkit/auto-animate";
import { Fragment, useEffect, useRef } from "react";
import { Loader } from "@mantine/core";

export const PostList = () => {
  const { items, loading } = useInfiniteScroll<PostDTO>({
    url: "/posts/v1/posts",
  });
  const { classes } = useStyles();
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <Fragment>
      <ul className={classes.list} ref={parent}>
        {items.map((post) => (
          <li className={classes.listItem} key={post.id}>
            <TextPost {...post} />
          </li>
        ))}
      </ul>
      {loading && (
        <div className={classes.loaderContainer}>
          <Loader variant="dots" size="lg" />
        </div>
      )}
    </Fragment>
  );
};
