import { Title, useMantineTheme } from "@mantine/core";

export const Logo = () => {
  const theme = useMantineTheme();

  return (
    <Title
      order={3}
      sx={{
        fontFamily: "Dancing Script",
        color: theme.colors.dark,
      }}
    >
      My Forum
    </Title>
  );
};
