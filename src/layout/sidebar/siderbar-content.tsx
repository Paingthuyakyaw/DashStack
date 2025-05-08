import { Collapsible } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BoxIcon } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Dashboard",
    icon: <BoxIcon />,
  },
  {
    id: 1,
    title: "Box",
    icon: <BoxIcon />,
  },
];

const SideBarContent = () => {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {data.map((item) => (
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SideBarContent;
