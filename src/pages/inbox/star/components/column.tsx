import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useStoer } from "@/store/client";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import type { ColumnDef } from "@tanstack/react-table";

interface mailProps {
  id: number;
  name: string;
  type: string;
  description: string;
  date: string;
}

export const column: ColumnDef<mailProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => {
      const { star, setStar } = useStoer();
      return (
        <div className=" flex items-center gap-5">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
          {star?.some((da) => da.id === row.original.id) ? (
            <>
              <IconStarFilled
                onClick={() => setStar(row.original)}
                className=" text-amber-500 cursor-pointer stroke-1 w-5 h-5 "
              />
            </>
          ) : (
            <>
              <IconStar
                onClick={() => setStar(row.original)}
                className=" stroke-amber-500 cursor-pointer stroke-1 w-5 h-5 "
              />
            </>
          )}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      return (
        <Badge
          style={{ backgroundColor: typeColor.get(row.original.type) }}
          className=" w-[60px] text-white"
        >
          {row.getValue("type")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];

const typeColor = new Map([
  ["Social", "#3D369F"],
  ["Work", "#FD9A56"],
  ["Primary", "#00B69B"],
  ["Friends", "#7D3A89"],
]);
