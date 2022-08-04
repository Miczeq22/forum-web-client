import { useCallback, useEffect, useState } from "react";
import useFetch from "use-http";
import { PostDTO } from "../../../../domain/post.dto";

export const usePost = (postId: string) => {
  const [post, setPost] = useState<PostDTO | null>(null);
  const { get, response } = useFetch(process.env.REACT_APP_API_URL);

  const fetchPost = useCallback(async () => {
    const singlePost = await get(`/posts/v1/posts/${postId}`);

    if (response.ok) {
      setPost(singlePost);
    }
  }, [response, get, postId]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return {
    post,
  };
};
