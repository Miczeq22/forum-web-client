import { Button, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const theme = useMantineTheme();

  const { width } = useViewportSize();

  return (
    <div
      style={{
        gridArea: "nav",
        backgroundColor: "red",
      }}
    >
      {width <= theme.breakpoints.sm && (
        <Button variant="subtle">
          <FaBars />
        </Button>
      )}
      Navbar
    </div>
  );
};
