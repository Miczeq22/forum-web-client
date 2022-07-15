import { Button, Checkbox, Input, InputWrapper, Textarea } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { MainLayout } from "../../theme/layouts/main.layout";
import { FormContainer } from "../../ui/form-container/form-container.component";

export const ProfilePage = () => {
  return (
    <MainLayout>
      <FormContainer
        title="Profile"
        description="Setting related to your profile"
      >
        <InputWrapper label="Avatar" description="It is good to have one">
          <Dropzone onDrop={() => {}}>{() => <div>Dropzone</div>}</Dropzone>
        </InputWrapper>
        <InputWrapper
          label="Display name"
          description="If you provide display name other users will see you this way"
        >
          <Input size="md" />
        </InputWrapper>
        <InputWrapper
          label="About"
          description="Here you can describe your Bio"
        >
          <Textarea minRows={4} size="md" />
        </InputWrapper>
      </FormContainer>
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
        <Button>Save</Button>
      </FormContainer>
    </MainLayout>
  );
};
