import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { lightTheme } from "../../theme/light.theme";
import { MobileMenuProvider } from "../mobile-menu/mobile-menu.provider";

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={lightTheme}>
      <MobileMenuProvider>{children}</MobileMenuProvider>
    </MantineProvider>
  );
};
