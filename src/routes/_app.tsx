import { Outlet, createFileRoute } from "@tanstack/react-router";

import { SidebarLayout } from "#layouts/sidebar-layout";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <SidebarLayout>
      <Outlet />
    </SidebarLayout>
  );
}
