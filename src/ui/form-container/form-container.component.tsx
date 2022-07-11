import { Text } from "@mantine/core";
import { ReactNode } from "react";
import { FormTitle } from "../form-title/form-title.component";
import { useStyles } from "./form-container.styles";

interface Props {
  title?: string;
  description?: string;
  children: ReactNode;
}

export const FormContainer = ({ title, description, children }: Props) => {
  const { classes } = useStyles();

  return (
    <section className={classes.container}>
      <header className={classes.titleWrapper}>
        {title && <FormTitle>{title}</FormTitle>}
        {description && (
          <Text color="dimmed" className={classes.description}>
            {description}
          </Text>
        )}
      </header>
      {children}
    </section>
  );
};
