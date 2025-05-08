import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSideBar from "./sidebar/sidebar";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset>
        <header className="flex border-b sticky top-0 bg-white z-30 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className=" px-4 pt-2 ">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
