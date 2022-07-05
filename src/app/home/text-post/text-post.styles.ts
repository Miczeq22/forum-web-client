import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  post: {
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.md,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  category: {
    fontWeight: 600,
    fontSize: theme.fontSizes.sm,
  },
  postedBy: {
    fontSize: theme.fontSizes.sm,
  },
  author: {
    fontWeight: 700,
    color: theme.colors.dark[8],
  },
  title: {
    fontSize: theme.fontSizes.lg,
    margin: `${theme.spacing.sm}px 0`,
    color: theme.colors.dark[8],
  },
  content: {
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    color: theme.colors.dark[7],
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing.md,
  },
  leftButtons: {},
  likes: {
    fontSize: theme.fontSizes.sm,
    margin: `0 ${theme.spacing.sm}px`,
    fontWeight: 600,
  },
  comments: {
    marginLeft: theme.spacing.sm,
  },
}));
