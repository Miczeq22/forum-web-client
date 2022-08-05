import { Avatar, Input, InputWrapper } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./create-post.styles";

export const CreatePost = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleInputClick = () => {
    navigate("/create-text-post");
  };

  return (
    <InputWrapper className={classes.container}>
      <Avatar radius="md" size="md" color="orange" />
      <Input
        size="md"
        placeholder="Let's share what going on your mind..."
        className={classes.input}
        onClick={handleInputClick}
      />
    </InputWrapper>
  );
};
