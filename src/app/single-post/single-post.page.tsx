import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MainLayout } from "../../theme/layouts/main.layout";
import { AddComment } from "./add-comment/add-comment.component";
import { CommentList } from "./comment-list/comment-list.component";
import { usePost } from "./text-post/hooks/use-post.hook";
import { TextPost } from "./text-post/text-post.component";

export const SinglePostPage = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  const { post } = usePost(id as string);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MainLayout>
      {post && <TextPost {...post} />}
      <AddComment />
      <CommentList />
    </MainLayout>
  );
};
