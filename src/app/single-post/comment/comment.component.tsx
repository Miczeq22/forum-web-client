import { Anchor, Avatar, Button, Text } from "@mantine/core";
import { FiArrowDown, FiArrowUp, FiMessageCircle } from "react-icons/fi";
import { useStyles } from "./comment.styles";

export const Comment = () => {
  const { classes } = useStyles();

  return (
    <article className={classes.comment}>
      <header>
        <nav className={classes.nav}>
          <Anchor href="#user">
            <Avatar radius="xl" color="orange" />
          </Anchor>
          <Anchor href="#user">
            <span className={classes.author}>marco</span>
          </Anchor>
          <Anchor href="#comment">
            <Text color="dimmed" className={classes.time}>
              2hr ago
            </Text>
          </Anchor>
        </nav>
      </header>
      <main className={classes.content}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        corrupti ea doloremque velit magnam iste possimus saepe quos incidunt
        expedita?
      </main>
      <footer className={classes.footer}>
        <Button variant="subtle">
          <FiArrowUp />
        </Button>
        <span className={classes.likes}>21</span>
        <Button variant="subtle">
          <FiArrowDown />
        </Button>
        <Button variant="subtle" className={classes.replyBtn}>
          <FiMessageCircle /> <span className={classes.reply}>Reply</span>
        </Button>
      </footer>
    </article>
  );
};
