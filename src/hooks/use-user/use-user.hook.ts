import { useContext } from "react";
import { UserContext, UserStateApi } from "../../providers/user/user.provider";

export const useUser = (): UserStateApi => {
  const context = useContext(UserContext) as UserStateApi;

  if (!context || !context.dispatch) {
    throw new Error("useUser must be used within UserProvider.");
  }

  return context;
};
