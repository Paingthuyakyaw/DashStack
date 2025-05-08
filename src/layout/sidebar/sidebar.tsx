import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import NavHeader from "./nav-header";
import SideBarContent from "./siderbar-content";

const AppSideBar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
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
