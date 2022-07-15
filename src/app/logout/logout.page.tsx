import { useEffect } from "react";
import { useUser } from "../../hooks/use-user/use-user.hook";
import { logout } from "../../providers/user/user.actions";

export const LogoutPage = () => {
  const { dispatch } = useUser();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return null;
};
