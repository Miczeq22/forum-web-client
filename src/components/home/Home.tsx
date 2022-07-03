import { LeftMenu } from "../LeftMenu";
import { Main } from "../Main";
import { Nav } from "../Nav";
import { RightMenu } from "../RightMenu";
import { SideBar } from "../sidebar/SideBar";

export const Home = () => (
  <div className="screen-root-container home-container">
    <div className="navigation">
      <Nav />
    </div>
    <SideBar />
    <LeftMenu />
    <Main />
    <RightMenu />
  </div>
);
