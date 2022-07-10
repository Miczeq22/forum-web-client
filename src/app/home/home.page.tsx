import { MainLayout } from "../../theme/layouts/main.layout";
import { CreatePost } from "./create-post/create-post.component";
import { PostList } from "./post-list/post-list.component";

export const HomePage = () => {
  return (
    <MainLayout>
      <CreatePost />
      <PostList />
    </MainLayout>
  );
};
