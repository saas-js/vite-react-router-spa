import { Box, Heading } from "@chakra-ui/react";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  beforeLoad: async () => {
    // We will add authentication here later
    const user = {
      id: "123",
      email: "john.doe@acme.com",
    };

    if (!user) {
      return;
    }

    const workspace = localStorage.getItem("workspace");

    const path = workspace ? `/${workspace}` : "/getting-started";

    throw redirect({
      to: path,
    });
  },
});

function Index() {
  return (
    <Box p="8">
      <Heading as="h1" mb="4">
        Welcome Home!
      </Heading>
    </Box>
  );
}
