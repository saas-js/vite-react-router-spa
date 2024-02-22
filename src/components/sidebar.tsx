import { NavGroup, NavItem, Sidebar, SidebarSection } from "@saas-ui/react";
import { getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/_app/$workspace/");

export const AppSidebar = () => {
  const params = route.useParams();

  return (
    <Sidebar>
      <SidebarSection>
        <NavGroup>
          <NavItem href={`/${params.workspace}`}>Home</NavItem>
        </NavGroup>
      </SidebarSection>
    </Sidebar>
  );
};
