import { MainLayout } from "../../theme/layouts/main.layout";
import { LoginForm } from "./login-form/login-form.component";
import { useStyles } from "./login.styles";

export const LoginPage = () => {
  const { classes } = useStyles();

  return (
    <MainLayout>
      <div className={classes.container}>
        <LoginForm />
      </div>
    </MainLayout>
  );
};
