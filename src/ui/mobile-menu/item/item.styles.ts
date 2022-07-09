import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  name: {
    padding: `${theme.spacing.md}px 0`,
    width: "100%",
    textAlign: "center",
    fontWeight: 500,
    color: theme.colors.dark[8],
    fontSize: theme.fontSizes.lg,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));
