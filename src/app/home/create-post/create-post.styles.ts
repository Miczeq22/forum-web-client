import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    margin: `0 ${theme.spacing.md}px`,
    marginTop: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: theme.spacing.sm,
    padding: theme.spacing.md,
  },
  input: {
    width: "100%",
    margin: `0 ${theme.spacing.sm}px`,
  },
}));
