import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  navbar: {
    gridArea: "nav",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    maxHeight: 69,
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 999,
  },
}));
