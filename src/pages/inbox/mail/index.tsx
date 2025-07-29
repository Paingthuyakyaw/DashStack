import { DataTable } from "@/components/data-table";
import { column } from "./components/column";
import UsePagination from "@/hooks/use-pagination";
import { InboxData } from "@/common/fake-data/inbox/inbox";
import UseParam from "@/hooks/use-param";
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";

const Mail = () => {
  const { record, totalPage, setSearch } = UsePagination(InboxData);
  const { setPage, page } = UseParam({ pageSize: 13 });

  return (
    <div>
      <div className=" mb-4 flex justify-end">
        <div className=" w-[300px] ">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className=" h-[79vh] overflow-hidden ">
        <DataTable columns={column} data={record} />
      </div>
      <div className=" mt-2 flex items-center justify-end ">
        <Button
          disabled={page <= 1}
          variant={"outline"}
          className=" cursor-pointer rounded-none"
          onClick={() => setPage(false)}
        >
          <IconChevronLeft />
        </Button>
        <Button
          disabled={page >= totalPage}
          variant={"outline"}
          className=" cursor-pointer rounded-none"
          onClick={() => setPage(true)}
        >
          <IconChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Mail;
