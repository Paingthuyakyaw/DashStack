import { createBrowserRouter, RouterProvider } from "react-router";
import { inboRouter } from "./inbox/inbox.route";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      lazy: async () => ({
        Component: (await import("@/layout/app-layout")).default,
      }),
      children: [
        {
          index: true,
          lazy: async () => ({
            Component: (await import("@/pages/dashboard")).default,
          }),
        },
        {
          path: "/products",
          lazy: async () => ({
            Component: (await import("@/pages/products")).default,
          }),
        },
        {
          path: "/favourites",
          lazy: async () => ({
            Component: (await import("@/pages/favourite")).default,
          }),
        },
        ...inboRouter,
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
