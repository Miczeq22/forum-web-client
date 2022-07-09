import { CreatePost } from "../../app/home/create-post/create-post.component";
import { PostList } from "../../app/home/post-list/post-list.component";
import { MainLayout } from "../../theme/layouts/main.layout";

export const Home = () => (
  <MainLayout>
    <CreatePost />
    <PostList />
  </MainLayout>
);
