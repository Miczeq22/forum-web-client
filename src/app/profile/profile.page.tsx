import { Button, Input, InputWrapper, Textarea } from "@mantine/core";
import { MainLayout } from "../../theme/layouts/main.layout";
import { FormContainer } from "../../ui/form-container/form-container.component";
import { AvatarInput } from "./avatar-input/avatar-input.component";

export const ProfilePage = () => {
  return (
    <MainLayout>
      <FormContainer
        title="Profile"
        description="Setting related to your profile"
      >
        <InputWrapper label="Avatar" description="It is good to have one">
          <AvatarInput />
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
        <InputWrapper>
          <Button fullWidth size="md">
            Save Profile Settings
          </Button>
        </InputWrapper>
      </FormContainer>
    </MainLayout>
  );
};
