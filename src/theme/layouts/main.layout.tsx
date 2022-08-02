import { createStyles, MediaQuery } from "@mantine/core";
import { ReactNode } from "react";
import { Navbar } from "../../ui/navbar/navbar.component";

interface Props {
  children: ReactNode;
}

const mobileStyles = {
  display: "block",
};

const useStyles = createStyles({
  layout: {
    maxWidth: 1200,
    margin: "0 auto",
  },
});

export const MainLayout = ({ children }: Props) => {
  const { classes } = useStyles();

  return (
    <MediaQuery smallerThan="sm" styles={mobileStyles}>
      <div className={classes.layout}>
        <Navbar />
        {children}
      </div>
    </MediaQuery>
  );
};
