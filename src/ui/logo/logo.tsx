import { Anchor, Title, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Link } from "react-router-dom";

export const Logo = () => {
  const theme = useMantineTheme();
  const { width } = useViewportSize();

  return (
    <Anchor underline={false} to="/#" component={Link}>
      <Title
        order={3}
        sx={{
          fontFamily: "Dancing Script",
          color: theme.colors.orange[8],
          fontSize:
            width <= theme.breakpoints.sm
              ? theme.fontSizes.xl
              : 27,
        }}
      >
        My Forum
      </Title>
    </Anchor>
  );
};
