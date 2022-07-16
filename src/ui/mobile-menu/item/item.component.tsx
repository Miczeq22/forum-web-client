import { Anchor, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useStyles } from "./item.styles";

interface Props {
  name: string;
  href?: string;
}

export const Item = ({ name, href }: Props) => {
  const { classes } = useStyles();

  return (
    <Anchor component={Link} to={href as string}>
      <Text className={classes.name}>{name}</Text>
    </Anchor>
  );
};
