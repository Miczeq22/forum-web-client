import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,

    "& > li:first-of-type": {
      marginTop: 0,
    },

    "& > li:nth-child(2n)": {
      backgroundColor: theme.colors.gray[0],
    },
  },
  item: {
    marginTop: theme.spacing.lg,
  },
}));
