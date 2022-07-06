import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  post: {
    padding: theme.spacing.md,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  author: {
    fontWeight: 700,
    color: theme.colors.dark[8],
  },
  title: {
    margin: `${theme.spacing.md}px 0`,
    fontSize: theme.headings.sizes.h3.fontSize,
  },
  content: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },
  leftButtons: {
    display: "flex",
    alignItems: "center",
  },
  likes: {
    fontWeight: 700,
    margin: `0 ${theme.spacing.sm}px`,
    fontSize: theme.fontSizes.md,
  },
  comments: {
    marginLeft: theme.spacing.md,
  },
}));
