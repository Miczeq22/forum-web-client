import { Button, InputWrapper, Textarea } from "@mantine/core";
import { useEffect, useRef } from "react";
import { useStyles } from "./add-reply.styles";

export const AddReply = () => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const { classes } = useStyles();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form>
      <InputWrapper>
        <Textarea
          placeholder="What are you thoughts?"
          size="md"
          minRows={3}
          ref={inputRef}
        />
      </InputWrapper>
      <Button className={classes.button}>Reply</Button>
    </form>
  );
};
