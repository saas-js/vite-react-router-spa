import { AppShell } from "@saas-ui/react";

export const FullscreenLayout: React.FC<React.PropsWithChildren> = (props) => {
  return <AppShell height="100dvh">{props.children}</AppShell>;
};
