import { Sidebar } from "@saas-ui/react";
import { getRouteApi, Link } from "@tanstack/react-router";

const route = getRouteApi("/_app/$workspace/");

export const AppSidebar = () => {
  const params = route.useParams();

  return (
    <Sidebar.Root>
      <Sidebar.Body>
        <Sidebar.Group>
          <Sidebar.NavItem>
            <Sidebar.NavButton asChild>
              <Link to="/">Home</Link>
            </Sidebar.NavButton>
          </Sidebar.NavItem>
        </Sidebar.Group>
      </Sidebar.Body>
    </Sidebar.Root>
  );
};
