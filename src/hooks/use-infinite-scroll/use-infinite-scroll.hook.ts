import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import useFetch from "use-http";

interface Props {
  url: string;
  itemsPerPage?: number;
}

export const useInfiniteScroll = <Item>({ url, itemsPerPage = 10 }: Props) => {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [fetchedPages, setFetchedPages] = useState([1]);

  const { get, response, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}`
  );

  const loadInitialItems = useCallback(async () => {
    const initialItems = await get(
      `${url}?page=1&itemsPerPage=${itemsPerPage}`
    );

    if (response.ok) {
      setItems(initialItems.data);
      setMaxPages(initialItems.maxPages);
    }
  }, [itemsPerPage, get, url, response.ok]);

  useEffect(() => {
    loadInitialItems();
  }, [loadInitialItems]);

  const loadMore = useCallback(async () => {
    const nextPage = Math.min(currentPage + 1, maxPages);
    setCurrentPage(nextPage);

    if (fetchedPages.includes(nextPage)) {
      return;
    }

    const items = await get(
      `${url}?page=${nextPage}&itemsPerPage=${itemsPerPage}`
    );

    if (response.ok) {
      if (maxPages !== items.maxPages) {
        setMaxPages(items.maxPages);
      }

      if (nextPage <= items.maxPages) {
        setItems((currentItems) => [...currentItems, ...items.data]);
        setFetchedPages((currentPages) => [...currentPages, nextPage]);
      }
    }
  }, [
    currentPage,
    response.ok,
    get,
    maxPages,
    fetchedPages,
    itemsPerPage,
    url,
  ]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.children[0].scrollTop;
      const scrollHeight = document.children[0].scrollHeight;
      const clientHeight = document.children[0].clientHeight;

      const setPaginateFlag =
        scrollHeight - Math.floor(scrollTop) === clientHeight;

      if (setPaginateFlag) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMore]);

  return {
    loading,
    items,
  };
};
