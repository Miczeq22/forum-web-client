import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginPayload } from "./use-login.hook";

interface FormPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface Props {
  onSubmit(payload: LoginPayload): Promise<void>;
}

export const useForm = ({ onSubmit }: Props) => {
  const formik = useFormik<FormPayload>({
    onSubmit,
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).trim().required(),
      rememberMe: Yup.boolean().required(),
    }),
    validateOnMount: true,
  });

  return {
    formik,
  };
};
