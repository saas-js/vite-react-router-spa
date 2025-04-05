import { Center, Container, Heading } from "@chakra-ui/react";
import { FormLayout, SubmitButton, useForm } from "@saas-ui/forms";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormEvent } from "react";

const slugify = (value: string) => {
  return value
    .trim()
    .toLocaleLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const Route = createFileRoute("/_onboarding/getting-started")({
  component: GettingStarted,
});

interface OnboardingData {
  organization: string;
  workspace: string;
}

function GettingStarted() {
  const navigate = useNavigate();

  const submit = useMutation<unknown, Error, OnboardingData>({
    mutationFn: async (values) => {
      localStorage.setItem("workspace", values.workspace);
    },
    onSuccess: (data, variables) => {
      navigate({
        to: "/$workspace",
        params: { workspace: variables.workspace },
      });
    },
  });

  const form = useForm<OnboardingData, object>({
    defaultValues: {
      organization: "",
      workspace: "",
    },
  });

  return (
    <Center height="100dvh">
      <Container maxW="xl">
        <Heading as="h2" size="lg" mb="4">
          Getting started
        </Heading>
        <form.Form
          onSubmit={(data) => submit.mutateAsync(data)}
        >
          <FormLayout>
            <form.Field
              label="Organization name"
              name="organization"
              onChange={(e: FormEvent<HTMLInputElement>) => {
                const value = e.currentTarget.value;
                form.setValue("organization", value);
                form.setValue("workspace", slugify(value));
              }}
            />
            <form.Field label="Workspace" name="workspace" />
            <SubmitButton>Continue</SubmitButton>
          </FormLayout>
        </form.Form>
      </Container>
    </Center>
  );
}
