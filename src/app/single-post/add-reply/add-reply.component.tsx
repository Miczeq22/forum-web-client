import { Button, InputWrapper, Textarea } from "@mantine/core";
import { useStyles } from "./add-reply.styles";

export const AddReply = () => {
  const { classes } = useStyles();

  return (
    <form>
      <InputWrapper>
        <Textarea placeholder="What are you thoughts?" size="md" minRows={3} />
      </InputWrapper>
      <Button className={classes.button}>Reply</Button>
    </form>
  );
};
