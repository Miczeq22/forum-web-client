import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { lightTheme } from "../../theme/light.theme";
import { MobileMenuProvider } from "../mobile-menu/mobile-menu.provider";
import { UserProvider } from "../user/user.provider";

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={lightTheme}>
      <UserProvider>
        <MobileMenuProvider>{children}</MobileMenuProvider>
      </UserProvider>
    </MantineProvider>
  );
};
