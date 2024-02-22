import { Outlet, createFileRoute } from "@tanstack/react-router";

import { FullscreenLayout } from "#layouts/fullscreen-layout";

export const Route = createFileRoute("/_onboarding")({
  component: OnboardingLayout,
});

function OnboardingLayout() {
  return (
    <FullscreenLayout>
      <Outlet />
    </FullscreenLayout>
  );
}
