import { Button, Checkbox, Input, InputWrapper } from "@mantine/core";
import { MainLayout } from "../../../theme/layouts/main.layout";
import { FormContainer } from "../../../ui/form-container/form-container.component";

export const AccountPage = () => {
  return (
    <MainLayout>
      <FormContainer
        title="Account"
        description="Setting related to your account"
      >
        <InputWrapper
          label="Change password"
          description="Provide new password"
        >
          <Input size="md" />
        </InputWrapper>
        <InputWrapper
          label="E-mail notifications"
          description="Here you can enable/disable e-mail notifications"
        >
          <Checkbox label="Enable e-mail notifications" size="md" />
        </InputWrapper>
        <Button fullWidth size="md">
          Save Account Settings
        </Button>
      </FormContainer>
    </MainLayout>
  );
};
