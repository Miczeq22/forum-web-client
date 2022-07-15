import { MainLayout } from "../../theme/layouts/main.layout"
import { RegisterForm } from "./register-form/register-form.component"
import { useStyles } from "./register.styles"

export const RegisterPage = () => {
    const { classes } = useStyles()

    return (
        <MainLayout>
            <div className={classes.container}>
            <RegisterForm />
            </div>
        </MainLayout>
    )
}