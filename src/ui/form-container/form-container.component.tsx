import { ReactNode } from "react";
import { FormTitle } from "../form-title/form-title.component";
import { useStyles } from "./form-container.styles";

interface Props {
  title?: string;
  children: ReactNode;
}

export const FormContainer = ({ title, children }: Props) => {
  const { classes } = useStyles();

  return (
    <section className={classes.container}>
      {title && (
        <header className={classes.titleWrapper}>
          <FormTitle>{title}</FormTitle>
        </header>
      )}
      {children}
    </section>
  );
};
