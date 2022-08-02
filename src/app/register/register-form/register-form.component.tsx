import {
  Button,
  Checkbox,
  Input,
  InputWrapper,
  PasswordInput,
} from "@mantine/core";
import { FormContainer } from "../../../ui/form-container/form-container.component";
import { RegistrationPayload } from "../hooks/use-registration.hook";
import { ChangeEvent } from "react";
import { useForm } from "../hooks/use-form.hook";

interface Props {
  onSubmit(payload: RegistrationPayload): Promise<void>;
  isLoading: boolean;
}

export const RegisterForm = ({ onSubmit, isLoading }: Props) => {
  const { formik } = useForm({
    onSubmit,
  });

  const handleTermsAndAgreementsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    formik.setFieldValue("acceptTermsAndConditions", event.target.checked);
  };

  return (
    <FormContainer
      title="Sign Up"
      description="Sign up to share your thoughts in easy way!"
    >
      <form onSubmit={formik.handleSubmit}>
        <InputWrapper
          label="E-mail address"
          description="Please provide real e-mail address, we will send you email confirmeation"
          required
          error={formik.values.email && formik.errors.email}
        >
          <Input
            type="email"
            placeholder="Provide your e-mail address"
            size="md"
            {...formik.getFieldProps("email")}
          />
        </InputWrapper>
        <InputWrapper
          label="Username"
          description="With username you can login to the app"
          required
          error={formik.values.username && formik.errors.username}
        >
          <Input
            placeholder="Provide your unique username"
            size="md"
            {...formik.getFieldProps("username")}
          />
        </InputWrapper>
        <InputWrapper
          label="Password"
          description="Provide strong password"
          required
          error={formik.values.password && formik.errors.password}
        >
          <PasswordInput
            placeholder="Provide your strong password"
            size="md"
            {...formik.getFieldProps("password")}
          />
        </InputWrapper>
        <InputWrapper
          label="Repeat password"
          description="To make sure you provided correct password, please write it once again"
          required
          error={formik.values.repeatPassword && formik.errors.repeatPassword}
        >
          <PasswordInput
            placeholder="Repeat your password"
            size="md"
            {...formik.getFieldProps("repeatPassword")}
          />
        </InputWrapper>
        <InputWrapper
          error={
            formik.values.acceptTermsAndConditions !== undefined &&
            formik.errors.acceptTermsAndConditions
          }
        >
          <Checkbox
            label="Accept Terms & Agreements"
            size="md"
            {...formik.getFieldProps("acceptTermsAndConditions")}
            onChange={handleTermsAndAgreementsChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Button
            fullWidth
            size="md"
            type="submit"
            disabled={!formik.isValid}
            loading={isLoading}
          >
            Sign Up
          </Button>
        </InputWrapper>
      </form>
    </FormContainer>
  );
};
