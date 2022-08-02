import useFetch from "use-http";
import { useUser } from "../../../hooks/use-user/use-user.hook";
import { login } from "../../../providers/user/user.actions";

export interface RegistrationPayload {
  email: string;
  password: string;
}

export const useRegistration = () => {
  const { dispatch } = useUser();

  const { post, response, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}/users/v1/platform-registration`
  );

  const register = async (payload: RegistrationPayload) => {
    const data = await post(payload);

    if (response.ok && data.accessToken && data.refreshToken) {
      dispatch(login());
    }
  };

  return {
    register,
    loading,
  };
};
