import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../hooks/use-user/use-user.hook";

interface Props {
  children: JSX.Element;
}

export const GuestOnly = ({ children }: Props) => {
  const location = useLocation();

  const {
    state: { isLoggedIn },
  } = useUser();

  return isLoggedIn ? (
    <Navigate
      to="/"
      replace
      state={{
        path: location.pathname,
      }}
    />
  ) : (
    children
  );
};
