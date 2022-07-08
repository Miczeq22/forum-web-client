import { Anchor, Title, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";

export const Logo = () => {
  const theme = useMantineTheme();

  return (
    <Anchor underline={false} to="/#" component={Link}>
      <Title
        order={3}
        sx={{
          fontFamily: "Dancing Script",
          color: theme.colors.orange[8],
        }}
      >
        My Forum
      </Title>
    </Anchor>
  );
};
