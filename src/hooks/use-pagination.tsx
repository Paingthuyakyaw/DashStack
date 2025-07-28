import { useEffect, useState } from "react";
import UseParam from "./use-param";

const UsePagination = <T,>(data: T[]) => {
  const [record, setRecord] = useState(data.slice(0, 10));
  const { page, size } = UseParam({});

  const currentPage = page;
  const start = (currentPage - 1) * size;
  const end = start + size;

  useEffect(() => {
    if (!data) null;

    setRecord(data.slice(start, end));
  }, [data, start, end]);

  return { record, totalPage: Math.ceil(data.length / size) };
};

export default UsePagination;
