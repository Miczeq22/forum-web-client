import { useEffect } from "react";
import { useUser } from "../../hooks/use-user/use-user.hook";
import { authStorage } from "../../providers/auth/auth.storage";
import { logout } from "../../providers/user/user.actions";

export const LogoutPage = () => {
  const { dispatch } = useUser();

  useEffect(() => {
    authStorage.setAccessToken(null);
    authStorage.setRefreshToken(null);
    dispatch(logout());
  }, [dispatch]);

  return null;
};
