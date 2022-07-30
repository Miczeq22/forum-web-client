import { Avatar, ThemeIcon, UnstyledButton } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { useState } from "react";
import { FiUser, FiX } from "react-icons/fi";
import { useStyles } from "./avatar-input.styles";

interface Props {
  avatarUrl?: string;
}

export const AvatarInput = ({ avatarUrl }: Props) => {
  const { classes } = useStyles();

  const [url, setUrl] = useState<string | null>(avatarUrl || null);

  const handleDeleteButtonClick = () => {
    setUrl(null);
  };

  const handleFileChange = () => {
    setUrl(
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
    );
  };

  return url ? (
    <div className={classes.avatarContainer}>
      <Avatar
        size="xl"
        color="orange"
        radius="md"
        src={url}
        sx={{
          width: "50%",
          height: "auto",
        }}
      />
      <UnstyledButton
        className={classes.deleteButton}
        onClick={handleDeleteButtonClick}
      >
        <FiX />
      </UnstyledButton>
    </div>
  ) : (
    <Dropzone
      onDrop={handleFileChange}
      accept={[MIME_TYPES.png, MIME_TYPES.jpeg]}
      multiple={false}
    >
      {() => {
        return (
          <div className={classes.dropzone}>
            <ThemeIcon size="xl" variant="filled" color="gray">
              <FiUser size={40} />
            </ThemeIcon>
            <p className={classes.dropzoneText}>
              Click or drop your avatar here
            </p>
          </div>
        );
      }}
    </Dropzone>
  );
};
