import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    marginTop: theme.spacing.md,
    padding: `0 ${theme.spacing.md}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    margin: `0 ${theme.spacing.sm}px`,
  },
}));
