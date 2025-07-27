import { DataTable } from "@/components/data-table";
import { column } from "./components/column";
import { InboxData } from "@/common/fake-data/inbox/inbox";

const Mail = () => {
  return (
    <div>
      <DataTable columns={column} data={InboxData} />
    </div>
  );
};

export default Mail;
