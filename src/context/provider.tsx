import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "../routeTree.gen";

// Set up a Router instance
const router = createRouter({
  routeTree,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const Provider = () => {
  return <RouterProvider router={router} />;
};
