import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MainLayout } from "../../theme/layouts/main.layout";
import { AddComment } from "./add-comment/add-comment.component";
import { CommentList } from "./comment-list/comment-list.component";
import { TextPost } from "./text-post/text-post.component";

export const SinglePostPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MainLayout>
      <TextPost />
      <AddComment />
      <CommentList />
    </MainLayout>
  );
};
