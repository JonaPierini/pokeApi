import { createHashRouter, RouterProvider } from "react-router-dom";
import { AppRouter } from "./presentacion/router/AppRouter";

export const App = () => {
  const router = createHashRouter([
    {
      path: "/*",
      element: <AppRouter />,
    },
  ]);
  return <RouterProvider router={router} />;
};
