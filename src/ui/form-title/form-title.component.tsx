import { Text } from "@mantine/core";
import { ReactNode } from "react";
import { useStyles } from "./form-title.styles";

interface Props {
  children: ReactNode;
}

export const FormTitle = ({ children }: Props) => {
  const { classes } = useStyles();

  return <Text className={classes.title}>{children}</Text>;
};
