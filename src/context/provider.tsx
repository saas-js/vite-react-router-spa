import { forwardRef } from "react";
import { SaasProvider } from "@saas-ui/react";
import {
  Link,
  LinkProps,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";

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

// This makes sure Saas UI components use our router
const LinkComponent = forwardRef<HTMLAnchorElement, Pick<LinkProps, "href">>(
  (props, ref) => {
    const { href, ...rest } = props;
    return <Link ref={ref} to={href} {...rest} />;
  }
);

export const Provider = () => {
  return (
    <SaasProvider linkComponent={LinkComponent}>
      <RouterProvider router={router} />
    </SaasProvider>
  );
};
