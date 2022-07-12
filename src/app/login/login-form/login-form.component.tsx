import {
  Button,
  Checkbox,
  Input,
  InputWrapper,
  PasswordInput,
} from "@mantine/core";
import { FormContainer } from "../../../ui/form-container/form-container.component";

export const LoginForm = () => {
  return (
    <FormContainer
      title="Sign In"
      description="Sign in and start sharing your thoughts!"
    >
      <InputWrapper
        label="Username"
        description="You've selected your username during registration"
        required
      >
        <Input placeholder="Provide your username" size="md" />
      </InputWrapper>
      <InputWrapper
        label="Password"
        description="If you don't remember your password you can always reset it"
        required
      >
        <PasswordInput placeholder="Provide your password" size="md" />
      </InputWrapper>
      <InputWrapper>
        <Checkbox label="Remember me?" size="md" />
      </InputWrapper>
      <InputWrapper>
        <Button size="md" fullWidth>
          Sign In
        </Button>
      </InputWrapper>
    </FormContainer>
  );
};
