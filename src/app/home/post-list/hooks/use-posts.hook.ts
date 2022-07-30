import { useCallback, useEffect, useState } from "react";
import { useFetch } from "use-http";

export interface PostDTO {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
  };
  status: string;
  category: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string | null;
}

export const usePosts = () => {
  const [posts, setPosts] = useState<PostDTO[]>([]);
  const { get, response } = useFetch(`${process.env.REACT_APP_API_URL}`);

  const loadInitialPosts = useCallback(async () => {
    const initialPosts = await get("/posts/v1/posts");

    if (response.ok) {
      setPosts(initialPosts.data);
    }
  }, [get, response]);

  useEffect(() => {
    loadInitialPosts();
  }, [loadInitialPosts]);

  return {
    posts,
  };
};
