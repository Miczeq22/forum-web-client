import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../hooks/use-user/use-user.hook";

interface Props {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
  const location = useLocation();

  const {
    state: { isLoggedIn },
  } = useUser();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate
      to="/login"
      replace
      state={{
        path: location.pathname,
      }}
    />
  );
};
