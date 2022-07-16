import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > li:first-of-type": {
      marginTop: 0,
    },
  },
  item: {
    width: "100%",
  },
  accordion: {
    width: "100%",

    "& button": {
      margin: 0,
      padding: `0 ${theme.spacing.lg}px`,
    },
  },
  accordionLabel: {
    padding: `${theme.spacing.lg}px 0`,
    fontWeight: 600,
    color: theme.colors.dark[8],
    fontSize: theme.fontSizes.lg,
  },
  accordionItem: {
    "& li:last-of-type div": {
      border: "none",
    },
  },
}));
