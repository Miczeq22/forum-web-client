import { Avatar, Button, Input, InputWrapper } from "@mantine/core";
import { FiPlus } from "react-icons/fi";
import { useStyles } from "./create-post.styles";

export const CreatePost = () => {
  const { classes } = useStyles();

  return (
    <InputWrapper className={classes.container}>
      <Avatar radius="md" size="md" color="orange" />
      <Input
        size="md"
        placeholder="Let's share what going on your mind..."
        className={classes.input}
      />
      <Button size="md" variant="filled">
        <FiPlus />
      </Button>
    </InputWrapper>
  );
};
