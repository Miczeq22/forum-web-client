import { Button, Checkbox, Input, InputWrapper } from "@mantine/core";
import { FormContainer } from "../../../ui/form-container/form-container.component";

export const RegisterForm = () => {
  return (
    <FormContainer
      title="Sign Up"
      description="Sign up to share your thoughts in easy way!"
    >
      <InputWrapper
        label="E-mail address"
        description="Please provide real e-mail address, we will send you email confirmeation"
        required
      >
        <Input
          type="email"
          placeholder="Provide your e-mail address"
          size="md"
        />
      </InputWrapper>
      <InputWrapper
        label="Username"
        description="With username you can login to the app"
        required
      >
        <Input
          type="email"
          placeholder="Provide your unique username"
          size="md"
        />
      </InputWrapper>
      <InputWrapper
        label="Password"
        description="Provide strong password"
        required
      >
        <Input
          type="email"
          placeholder="Provide your strong password"
          size="md"
        />
      </InputWrapper>
      <InputWrapper
        label="Repeat password"
        description="To make sure you provided correct password, please write it once again"
        required
      >
        <Input
          type="email"
          placeholder="Repeat your password"
          size="md"
        />
      </InputWrapper>
      <InputWrapper
      >
        <Checkbox
          label="Accept Terms & Agreements"
          size="md"
        />
      </InputWrapper>
      <InputWrapper>
      <Button fullWidth size="md">Sign Up</Button>
      </InputWrapper>
    </FormContainer>
  );
};
