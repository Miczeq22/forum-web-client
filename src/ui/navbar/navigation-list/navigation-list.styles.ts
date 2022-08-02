import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => ({
  list: {
    listStyle: 'none',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: "80%",

    '& > li:last-of-type': {
      marginRight: 0,
    }
  },
  item: {
    marginRight: theme.spacing.xl,
  },
  itemText: {
    fontWeight: 500,
  },
  menuButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuButtonText: {
    marginRight: theme.spacing.xs,
  },
  dropdown: {
    zIndex: 10,
  }
}));
