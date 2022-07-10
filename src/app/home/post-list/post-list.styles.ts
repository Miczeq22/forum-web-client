import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  list: {
    margin: 0,
    padding: theme.spacing.md,
    listStyle: "none",

    "& > li:first-of-type": {
      marginTop: 0,
    },
  },
  listItem: {
    marginTop: theme.spacing.md,
  },
}));
