import { Anchor, Badge, Button, Text, Title } from "@mantine/core";
import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa";
import { useStyles } from "./text-post.styles";

export const TextPost = () => {
  const { classes } = useStyles();

  return (
    <article className={classes.post}>
      <header>
        <nav className={classes.nav}>
          <Anchor href="/#category">
            <Badge variant="outline" size="sm">
              Programming
            </Badge>
          </Anchor>
          <Anchor href="/#user" color="dimmed">
            <Text className={classes.postedBy}>
              Posted by <span className={classes.author}>johnny21</span>
            </Text>
          </Anchor>
        </nav>
        <Title order={3} className={classes.title}>
          What is DDD?
        </Title>
      </header>
      <main className={classes.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        distinctio facilis eveniet dolorem. Voluptatem quae autem, nobis
        quibusdam ducimus earum molestiae commodi nemo maxime dolorem quos quasi
        adipisci dolore veniam molestias ipsam alias, sint impedit mollitia
        beatae? Unde quam consectetur, amet eos labore recusandae repudiandae
        porro facere nemo autem nam.
      </main>
      <footer className={classes.footer}>
        <div className={classes.leftButtons}>
          <Button variant="subtle" size="xs">
            <FaArrowUp />
          </Button>
          <span className={classes.likes}>239</span>
          <Button variant="subtle" size="xs">
            <FaArrowDown />
          </Button>
        </div>
        <div>
          <Button variant="subtle" size="xs">
            <FaComment />
            <span className={classes.comments}>9 comments</span>
          </Button>
        </div>
      </footer>
    </article>
  );
};
