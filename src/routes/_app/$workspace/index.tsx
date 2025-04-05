import { Center } from "@chakra-ui/react";
import { EmptyState } from "@saas-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/$workspace/")({
  component: Home,
});

function Home() {
  return (
    <Center height="100dvh">
      <EmptyState
        title="Nothing here yet"
        description="Add routes and pages to get started"
      />
    </Center>
  );
}
