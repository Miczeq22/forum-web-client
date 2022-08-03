import useFetch from "use-http";
import { useUser } from "../../../hooks/use-user/use-user.hook";
import { login } from "../../../providers/user/user.actions";

export interface LoginPayload {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { post, response, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}/users/v1/platform-access/login`
  );
  const { dispatch } = useUser();

  const handleLogin = async (payload: LoginPayload) => {
    const data = await post(payload);

    if (response.ok && data.accessToken && data.refreshToken) {
      dispatch(login());
    }
  };

  return {
    loading,
    login: handleLogin,
  };
};
