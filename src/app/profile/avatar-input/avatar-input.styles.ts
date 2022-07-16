import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  deleteButton: {
    position: "absolute",
    top: -10,
    right: "22%",
    backgroundColor: theme.colors.red[6],
    borderRadius: "50%",
    width: 25,
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  dropzone: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dropzoneText: {
    fontWeight: 500,
  },
}));
