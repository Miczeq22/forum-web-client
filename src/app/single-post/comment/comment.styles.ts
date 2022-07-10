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
  footer: {},
  reply: {
    marginLeft: theme.spacing.xs,
  },
  replyBtn: {
    marginLeft: theme.spacing.md,
  },
  likes: {
    margin: `0 ${theme.spacing.md}px`,
  },
  addReply: {
    marginTop: theme.spacing.md,
  },
  replies: {
    margin: 0,
    padding: 0,
    paddingLeft: theme.spacing.lg,
    position: "relative",

    "&::before": {
      content: "''",
      position: "absolute",
      top: 10,
      left: 10,
      height: "90%",
      width: 1,
      backgroundColor: theme.colors.gray[3],
    },
  },
}));
