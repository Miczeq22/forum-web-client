import { MainLayout } from "../../theme/layouts/main.layout";
import { AddComment } from "./add-comment/add-comment.component";
import { TextPost } from "./text-post/text-post.component";

export const SinglePostPage = () => (
  <MainLayout>
    <TextPost />
    <AddComment />
  </MainLayout>
);
