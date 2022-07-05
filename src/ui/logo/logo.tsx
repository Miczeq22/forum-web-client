import { Anchor, Title, useMantineTheme } from "@mantine/core";

export const Logo = () => {
  const theme = useMantineTheme();

  return (
    <Anchor underline={false} href="/#">
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
