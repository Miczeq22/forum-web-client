import { useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./app/home/home.page";
import { LoginPage } from "./app/login/login.page";
import { ProfilePage } from "./app/profile/profile.page";
import { RegisterPage } from "./app/register/register.page";
import { SinglePostPage } from "./app/single-post/single-post.page";
import { GuestOnly } from "./routes/guest-only";
import { RequireAuth } from "./routes/require-auth";
import { MobileMenu } from "./ui/mobile-menu/mobile-menu.component";

function App() {
  const theme = useMantineTheme();
  const { width } = useViewportSize();

  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route
          path="/post"
          element={
            <RequireAuth>
              <SinglePostPage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <GuestOnly>
              <LoginPage />
            </GuestOnly>
          }
        />
        <Route
          path="/register"
          element={
            <GuestOnly>
              <RegisterPage />
            </GuestOnly>
          }
        />
      </Routes>
      {width <= theme.breakpoints.sm && <MobileMenu />}
    </Fragment>
  );
}

export default App;
