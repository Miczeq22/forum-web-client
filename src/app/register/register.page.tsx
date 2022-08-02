import { MainLayout } from "../../theme/layouts/main.layout";
import { useRegistration } from "./hooks/use-registration.hook";
import { RegisterForm } from "./register-form/register-form.component";
import { useStyles } from "./register.styles";

export const RegisterPage = () => {
  const { classes } = useStyles();
  const { register, loading } = useRegistration();

  return (
    <MainLayout>
      <div className={classes.container}>
        <RegisterForm onSubmit={register} isLoading={loading} />
      </div>
    </MainLayout>
  );
};
