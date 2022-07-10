import { Anchor, Avatar, Button, Text } from "@mantine/core";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useStyles } from "./reply.styles";

export const Reply = () => {
  const { classes } = useStyles();

  return (
    <article className={classes.reply}>
      <header>
        <nav className={classes.nav}>
          <Anchor component={Link} to="#user">
            <Avatar radius="xl" color="orange" />
          </Anchor>
          <Anchor component={Link} to="#user">
            <span className={classes.author}>xavery</span>
          </Anchor>
          <Text color="dimmed" className={classes.time}>
            13s ago
          </Text>
        </nav>
      </header>
      <main className={classes.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        quisquam accusantium eligendi.
      </main>
      <footer>
        <Button variant="subtle">
          <FiArrowUp />
        </Button>
        <span className={classes.likes}>21</span>
        <Button variant="subtle">
          <FiArrowDown />
        </Button>
      </footer>
    </article>
  );
};
