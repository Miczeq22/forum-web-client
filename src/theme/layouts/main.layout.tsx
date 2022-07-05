import { createStyles, MediaQuery } from "@mantine/core";
import { ReactNode } from "react";
import { LeftMenu } from "../../components/LeftMenu";
import { Main } from "../../components/Main";
import { RightMenu } from "../../components/RightMenu";
import { SideBar } from "../../components/sidebar/SideBar";
import { Navbar } from "../../ui/navbar/navbar.component";

interface Props {
  children: ReactNode;
}

const mobileStyles = {
  gridTemplateColumns: "1fr",
  gridTemplateRows: "",
  gridTemplateAreas: `
    "nav"
    "content"
  `,
  gap: "0",
};

const useStyles = createStyles({
  layout: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "0.7fr 0.9fr 1.5fr 0.9fr",
    gridTemplateRows: "1fr 15fr",
    gridTemplateAreas: `"nav nav nav nav" "sidebar left-menu content right-menu"`,
    gap: "0.75rem 0.4rem",
  },
});

export const MainLayout = ({ children }: Props) => {
  const { classes } = useStyles();

  return (
    <MediaQuery smallerThan="sm" styles={mobileStyles}>
      <div className={classes.layout}>
        <Navbar />
        <SideBar />
        <LeftMenu />
        <Main />
        <RightMenu />
      </div>
    </MediaQuery>
  );
};
