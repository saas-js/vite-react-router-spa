import { AppShell, Sidebar } from "@saas-ui/react";

import { AppSidebar } from "#components/sidebar";

export const SidebarLayout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Sidebar.Provider>
      <AppShell height="100dvh" sidebar={<AppSidebar />}>
        {props.children}
      </AppShell>
    </Sidebar.Provider>
  );
};
