import { sideBarData } from "@/common/fake-data/sidebar";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router";

const SideBarContent = () => {
  const navigate = useNavigate();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {sideBarData.map((item) => (
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => navigate(item.link)}
              tooltip={item.title}
            >
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
