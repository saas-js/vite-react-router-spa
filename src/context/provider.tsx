import { forwardRef } from "react";
import { LinkProps, SaasProvider } from "@saas-ui/react";
import { RouterProvider, createRouter, Link } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { routeTree } from "../routeTree.gen";

const queryClient = new QueryClient();

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// This makes sure Saas UI components use our router
const LinkComponent = forwardRef<HTMLAnchorElement, Pick<LinkProps, "href">>(
  (props, ref) => {
    const { href, ...rest } = props;
    return <Link ref={ref} to={href} {...rest} />;
  }
);

export const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SaasProvider linkComponent={LinkComponent}>
        <RouterProvider router={router} />
      </SaasProvider>
    </QueryClientProvider>
  );
};
