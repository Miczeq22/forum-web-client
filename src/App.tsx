import { useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SinglePostPage } from "./app/single-post/single-post.page";
import { Registration } from "./components/auth/Registration";
import { Home } from "./components/home/Home";
import { MobileMenu } from "./ui/mobile-menu/mobile-menu.component";

function App() {
  const theme = useMantineTheme();
  const { width } = useViewportSize();

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Registration isOpen onClickToggle={() => {}} />}
        />
        <Route path="/post" element={<SinglePostPage />} />
      </Routes>
      {width <= theme.breakpoints.sm && <MobileMenu />}
    </Fragment>
  );
}

export default App;
