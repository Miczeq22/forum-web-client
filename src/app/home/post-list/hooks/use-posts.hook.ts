import { useCallback, useEffect, useLayoutEffect, useState } from "react";
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

interface Props {
  itemsPerPage?: number;
}

export const usePosts = ({ itemsPerPage = 10 }: Props) => {
  const [posts, setPosts] = useState<PostDTO[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { get, response } = useFetch(`${process.env.REACT_APP_API_URL}`);
  const [maxPages, setMaxPages] = useState(1);
  const [fetchedPages, setFetchedPages] = useState([1]);

  const loadInitialPosts = useCallback(async () => {
    const initialPosts = await get(`/posts/v1/posts?page=1&itemsPerPage=${itemsPerPage}`);

    if (response.ok) {
      setPosts(initialPosts.data);
      setMaxPages(initialPosts.maxPages);
    }
  }, [get, response, itemsPerPage]);

  useEffect(() => {
    loadInitialPosts();
  }, [loadInitialPosts]);

  const goToNextPage = useCallback(async () => {
    const nextPage = Math.min(currentPage + 1, maxPages);
    setCurrentPage(nextPage);

    if (fetchedPages.includes(nextPage)) {
      return;
    }

    const data = await get(`/posts/v1/posts?page=${nextPage}&itemsPerPage=${itemsPerPage}`);

    if (response.ok) {
      if (maxPages !== data.maxPages) {
        setMaxPages(data.maxPages);
      }

      if (nextPage <= data.maxPages) {
        setPosts((currentPosts) => [...currentPosts, ...data.data]);
        setFetchedPages((currentPages) => [...currentPages, nextPage]);
      }
    }
  }, [currentPage, response, get, maxPages, fetchedPages, itemsPerPage
  ]);

  useLayoutEffect(() => {
    const handleScroll = async () => {
      const scrollTop = document.children[0].scrollTop;
      const scrollHeight = document.children[0].scrollHeight;
      const clientHeight = document.children[0].clientHeight;

      const setPaginateFlag =
        scrollHeight - Math.floor(scrollTop) === clientHeight;

      if (setPaginateFlag) {
        await goToNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [goToNextPage]);

  return {
    posts,
  };
};
