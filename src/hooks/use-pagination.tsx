import { useEffect, useState } from "react";
import UseParam from "./use-param";

const UsePagination = <T,>(data: T[]) => {
  const [record, setRecord] = useState(data.slice(0, 10));
  const { page, size } = UseParam({});
  const [search, setSearch] = useState("");

  const filterData = search
    ? data.filter((da: any) =>
        da.name.trim().toLowerCase().includes(search.trim().toLowerCase())
      )
    : data;

  const currentPage = page;
  const start = (currentPage - 1) * size;
  const end = start + size;

  useEffect(() => {
    if (!filterData) return;

    setRecord(filterData.slice(start, end));
  }, [filterData, start, end]);

  return { record, totalPage: Math.ceil(filterData.length / size), setSearch };
};

export default UsePagination;
