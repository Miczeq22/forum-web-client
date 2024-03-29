import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  name: {
    padding: `${theme.spacing.lg}px 0`,
    width: "100%",
    fontWeight: 600,
    color: theme.colors.dark[8],
    fontSize: theme.fontSizes.lg,
    borderBottom: `1px solid ${theme.colors.gray[1]}`,
    paddingLeft: theme.spacing.lg,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));
