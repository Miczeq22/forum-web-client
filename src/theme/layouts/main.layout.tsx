import { createStyles, MediaQuery } from "@mantine/core";
import { ReactNode } from "react";
import { Navbar } from "../../ui/navbar/navbar.component";

interface Props {
  children: ReactNode;
}

const mobileStyles = {
  gridTemplateColumns: "1fr",
  gridTemplateAreas: `
    "nav"
    "content"
  `,
  gap: "0",
  gridTemplateRows: "1fr",
};

const useStyles = createStyles({
  layout: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "0.7fr 0.9fr 1.5fr 0.9fr",
    gridTemplateRows: "1fr 15fr",
    gridTemplateAreas: `"nav nav nav nav" "content"`,
    gap: "0.75rem 0.4rem",
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
