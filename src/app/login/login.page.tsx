import { MainLayout } from "../../theme/layouts/main.layout";
import { useLogin } from "./hooks/use-login.hook";
import { LoginForm } from "./login-form/login-form.component";
import { useStyles } from "./login.styles";

export const LoginPage = () => {
  const { classes } = useStyles();
  const { login, loading } = useLogin()


  return (
    <MainLayout>
      <div className={classes.container}>
        <LoginForm onSubmit={login} isLoading={loading} />
      </div>
    </MainLayout>
  );
};
