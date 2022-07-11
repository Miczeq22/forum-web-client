import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    padding: theme.spacing.md,

    ".mantine-InputWrapper-label": {
      fontWeight: 600,
      fontSize: theme.fontSizes.md,
    },

    ".mantine-InputWrapper-root": {
      marginBottom: theme.spacing.xl,
    },
  },
  titleWrapper: {
    marginBottom: theme.spacing.md,
  },
  description: {
    fontWeight: 500,
    fontSize: theme.fontSizes.md,
  },
}));
