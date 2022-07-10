import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  comment: {
    padding: theme.spacing.md,
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  author: {
    margin: `0 ${theme.spacing.md}px`,
    fontWeight: 600,
    color: theme.colors.dark[8],
  },
  time: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },
  content: {
    margin: `${theme.spacing.md}px 0`,
    fontWeight: 500,
  },
  footer: {
    marginBottom: theme.spacing.md,
  },
  reply: {
    marginLeft: theme.spacing.xs,
  },
  replyBtn: {
    marginLeft: theme.spacing.md,
  },
  likes: {
    margin: `0 ${theme.spacing.md}px`,
  },
}));
