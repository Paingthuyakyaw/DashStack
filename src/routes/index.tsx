import { createBrowserRouter, RouterProvider } from "react-router";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      lazy: async () => ({
        Component: (await import("@/layout/app-layout")).default,
      }),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
