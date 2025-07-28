import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const UseParam = ({ pageSize = 10 }: { pageSize?: number }) => {
  const [searchParam, setSearchParam] = useSearchParams();

  const currentPage = searchParam.get("page") || 1;
  const size = searchParam.get("size") || pageSize;
  const search = searchParam.get("search") || "";

  const [page, setPage] = useState(Number(currentPage));

  useEffect(() => {
    setSearchParam({ page: page.toString(), size: size.toString() });
  }, [page, size]);

  const handlePage = (bool: boolean) => {
    return bool
      ? setPage(() => Number(currentPage) + 1)
      : setPage((pre) => pre - 1);
  };

  return {
    page: Number(currentPage),
    size: Number(size),
    setPage: handlePage,
    search,
  };
};

export default UseParam;
