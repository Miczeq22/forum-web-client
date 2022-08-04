import useFetch from "use-http";
import { useUser } from "../../../hooks/use-user/use-user.hook";
import { authStorage } from "../../../providers/auth/auth.storage";
import { login } from "../../../providers/user/user.actions";

export interface LoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const useLogin = () => {
  const { post, response, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}/users/v1/platform-access/login`
  );
  const { dispatch } = useUser();

  const handleLogin = async ({ rememberMe, ...payload }: LoginPayload) => {
    const data = await post(payload);

    if (response.ok && data.accessToken && data.refreshToken) {
      if (rememberMe) {
        authStorage.setAccessToken(data.accessToken);
        authStorage.setRefreshToken(data.refreshToken);
      }

      dispatch(login());
    }
  };

  return {
    loading,
    login: handleLogin,
  };
};
