import { sideBarData } from "@/common/fake-data/sidebar";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router";

const SideBarContent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const path = pathname.split("/")?.[1];

  return (
    <SidebarGroup>
      <SidebarMenu>
        {sideBarData.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton
              className={`cursor-pointer ${
                item.link === `/${path}`
                  ? " bg-primary hover:bg-primary hover:text-white text-white"
                  : ""
              }`}
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
