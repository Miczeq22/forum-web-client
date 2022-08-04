import { Anchor, Badge, Button, Text, Title } from "@mantine/core";
import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PostDTO } from "../../../domain/post.dto";
import { useStyles } from "./text-post.styles";

export const TextPost = ({ category, author, content, title }: PostDTO) => {
  const { classes } = useStyles();

  return (
    <article className={classes.post}>
      <header>
        <nav className={classes.nav}>
          <Anchor to="/#category" component={Link}>
            <Badge variant="outline" size="md">
              {category.name}
            </Badge>
          </Anchor>
          <Anchor to="/#user" color="dimmed" component={Link}>
            <Text>
              Posted by <span className={classes.author}>{author.id}</span>
            </Text>
          </Anchor>
        </nav>
        <Title order={2} className={classes.title}>
          {title}
        </Title>
      </header>
      <main className={classes.content}>{content}</main>
      <footer className={classes.footer}>
        <div className={classes.leftButtons}>
          <Button variant="subtle" size="md">
            <FaArrowUp />
          </Button>
          <span className={classes.likes}>239</span>
          <Button variant="subtle" size="md">
            <FaArrowDown />
          </Button>
        </div>
        <div>
          <Button variant="subtle" size="md">
            <FaComment />
            <span className={classes.comments}>9 comments</span>
          </Button>
        </div>
      </footer>
    </article>
  );
};
