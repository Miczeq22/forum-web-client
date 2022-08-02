import { useFormik } from "formik";
import * as Yup from "yup";
import { RegistrationPayload } from "./use-registration.hook";

interface FormPayload {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
  acceptTermsAndConditions: boolean | undefined;
}

interface Props {
  onSubmit(payload: RegistrationPayload): Promise<void>;
}

export const useForm = ({ onSubmit }: Props) => {
  const formik = useFormik<FormPayload>({
    onSubmit: async ({ email, password }) =>
      onSubmit({
        email,
        password,
      }),
    initialValues: {
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
      acceptTermsAndConditions: undefined,
    },
    validationSchema: Yup.object({
      email: Yup.string().email().trim().required(),
      username: Yup.string().trim().min(3).required(),
      password: Yup.string().trim().min(6).required(),
      repeatPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match."
      ),
      acceptTermsAndConditions: Yup.boolean()
        .required()
        .oneOf([true, null], "Terms & Agreements must be accepted."),
    }),
    validateOnMount: true,
  });

  return {
    formik,
  };
};
