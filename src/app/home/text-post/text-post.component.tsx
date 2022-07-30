import { Anchor, Badge, Button, Text, Title } from "@mantine/core";
import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PostDTO } from "../post-list/hooks/use-posts.hook";
import { useStyles } from "./text-post.styles";

export const TextPost = ({ id, title, content, category, author }: PostDTO) => {
  const { classes } = useStyles();
  const singlePostLink = `/post/${id}`;

  return (
    <article className={classes.post}>
      <header>
        <nav className={classes.nav}>
          <Anchor to="/#category" component={Link}>
            <Badge variant="outline" size="sm">
              {category.name}
            </Badge>
          </Anchor>
          <Anchor to="/#user" color="dimmed" component={Link}>
            <Text className={classes.postedBy}>
              Posted by <span className={classes.author}>{author.id}</span>
            </Text>
          </Anchor>
        </nav>
        <Anchor component={Link} to={singlePostLink} underline={false}>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </Anchor>
      </header>
      <Anchor component={Link} to={singlePostLink} underline={false}>
        <main className={classes.content}>{content}</main>
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
      </Anchor>
    </article>
  );
};
