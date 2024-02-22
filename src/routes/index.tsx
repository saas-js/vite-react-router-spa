import { Box, Heading } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
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
