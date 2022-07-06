import { Button, InputWrapper, Textarea } from "@mantine/core";
import { FiMessageCircle } from "react-icons/fi";
import { FormContainer } from "../../../ui/form-container/form-container.component";

export const AddComment = () => {
  return (
    <FormContainer>
      <form>
        <InputWrapper label="Comment as johnny21" size="md">
          <Textarea
            placeholder="What are you thoughts?"
            size="md"
            minRows={4}
          />
        </InputWrapper>
        <Button size="md" leftIcon={<FiMessageCircle />}>
          Comment
        </Button>
      </form>
    </FormContainer>
  );
};
