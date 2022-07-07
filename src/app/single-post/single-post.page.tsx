import { MainLayout } from "../../theme/layouts/main.layout";
import { AddComment } from "./add-comment/add-comment.component";
import { CommentList } from "./comment-list/comment-list.component";
import { TextPost } from "./text-post/text-post.component";

export const SinglePostPage = () => (
  <MainLayout>
    <TextPost />
    <AddComment />
    <CommentList />
  </MainLayout>
);
