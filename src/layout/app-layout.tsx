import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSideBar from "./sidebar/sidebar";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { Toggle } from "@/components/toggle";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset className=" bg-[#F5F6FA] dark:bg-black">
        <header className="flex border-b sticky top-0 dark:bg-transparent bg-white z-30 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className=" flex w-full items-center px-4 justify-between">
            <div className="flex  items-center gap-2 ">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div>
              <Toggle />
            </div>
          </div>
        </header>
        <div className=" px-4 pt-4 ">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
