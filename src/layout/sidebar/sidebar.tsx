import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import NavHeader from "./nav-header";
import SideBarContent from "./siderbar-content";

const AppSideBar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <SideBarContent />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSideBar;
