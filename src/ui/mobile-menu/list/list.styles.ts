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
}));
