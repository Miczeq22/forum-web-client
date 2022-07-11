import { Anchor, Avatar, Button, Text } from "@mantine/core";
import { useRef, useState } from "react";
import { FiArrowDown, FiArrowUp, FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AddReply } from "../add-reply/add-reply.component";
import { Reply } from "../reply/reply.component";
import { useStyles } from "./comment.styles";

export const Comment = () => {
  const replyRef = useRef<HTMLDivElement | null>(null);
  const [isReplyInputOpen, setIsReplyInputOpen] = useState(false);

  const { classes } = useStyles();

  const handleReplyClick = () => {
    if (!isReplyInputOpen) {
      replyRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setIsReplyInputOpen(!isReplyInputOpen);
  };

  return (
    <article className={classes.comment}>
      <header>
        <nav className={classes.nav}>
          <Anchor to="#user" component={Link}>
            <Avatar radius="xl" color="orange" />
          </Anchor>
          <Anchor to="#user" component={Link}>
            <span className={classes.author}>marco</span>
          </Anchor>
          <Anchor to="#comment" component={Link}>
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
        <Button
          variant="subtle"
          className={classes.replyBtn}
          onClick={handleReplyClick}
        >
          <FiMessageCircle /> <span className={classes.reply}>Reply</span>
        </Button>
        <div className={classes.addReply}>
          <ul className={classes.replies}>
            {new Array(3).fill(0).map((_, index) => (
              <li key={`reply-${index}`}>
                <Reply />
              </li>
            ))}
          </ul>
          <div ref={replyRef}>{isReplyInputOpen && <AddReply />}</div>
        </div>
      </footer>
    </article>
  );
};
