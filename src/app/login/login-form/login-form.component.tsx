import {
  Button,
  Checkbox,
  Input,
  InputWrapper,
  PasswordInput,
} from "@mantine/core";
import { ChangeEvent } from "react";
import { FormContainer } from "../../../ui/form-container/form-container.component";
import { useForm } from "../hooks/use-form.hook";
import { LoginPayload } from "../hooks/use-login.hook";

interface Props {
  onSubmit(payload: LoginPayload): Promise<void>;
  isLoading: boolean;
}

export const LoginForm = ({ onSubmit, isLoading }: Props) => {
  const { formik } = useForm({ onSubmit });

  const handleRememberMeChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("rememberMe", event.target.checked);
  };

  return (
    <FormContainer
      title="Sign In"
      description="Sign in and start sharing your thoughts!"
    >
      <form onSubmit={formik.handleSubmit}>
        <InputWrapper
          label="Username"
          description="You've selected your username during registration"
          required
          error={formik.values.email && formik.errors.email}
        >
          <Input
            type="email"
            placeholder="Provide your username"
            size="md"
            {...formik.getFieldProps("email")}
          />
        </InputWrapper>
        <InputWrapper
          label="Password"
          description="If you don't remember your password you can always reset it"
          required
          error={formik.values.password && formik.errors.password}
        >
          <PasswordInput
            placeholder="Provide your password"
            size="md"
            {...formik.getFieldProps("password")}
          />
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            label="Remember me?"
            size="md"
            {...formik.getFieldProps("rememberMe")}
            onChange={handleRememberMeChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Button
            size="md"
            fullWidth
            type="submit"
            disabled={!formik.isValid}
            loading={isLoading}
          >
            Sign In
          </Button>
        </InputWrapper>
      </form>
    </FormContainer>
  );
};
