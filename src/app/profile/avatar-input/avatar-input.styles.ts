import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  avatarContainer: {
    position: "relative",
    paddingTop: theme.spacing.md,
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    left: "45%",
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
