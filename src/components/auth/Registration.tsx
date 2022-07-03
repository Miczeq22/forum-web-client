import { useFormik } from "formik";
import ReactModal from "react-modal";
import * as Yup from "yup";

interface Props {
  isOpen: boolean;
  onClickToggle: () => void;
}

interface RegisterInput {
  userName: string;
  password: string;
  email: string;
  passwordConfirm: string;
}

export const Registration = ({ isOpen, onClickToggle }: Props) => {
  const formik = useFormik<RegisterInput>({
    initialValues: {
      userName: "",
      password: "",
      email: "admin@admin.com",
      passwordConfirm: "",
    },
    onSubmit: (values) => console.log(values),
    validateOnMount: true,
    validationSchema: Yup.object({
      userName: Yup.string().trim().required(),
      email: Yup.string().email().required(),
      password: Yup.string().trim().required(),
      passwordConfirm: Yup.string()
        .trim()
        .test(
          "equal",
          "passwords do not match",
          function (value: string | undefined) {
            const passwordRef = Yup.ref("password");

            return value === this.resolve(passwordRef);
          }
        ),
    }),
  });

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="reg-inputs">
          <label>username</label>
          <input type="text" {...formik.getFieldProps("userName")} />
        </div>
        <div>
          <label>email</label>
          <input type="email" {...formik.getFieldProps("email")} />
        </div>
        <div>
          <label>password</label>
          <input type="password" {...formik.getFieldProps("password")} />
        </div>
        <div>
          <label>confirm password</label>
          <input type="password" {...formik.getFieldProps("passwordConfirm")} />
        </div>
        <div className="form-buttons">
          <div className="form-btn-left">
            <button
              style={{
                marginLeft: "0.5rem",
              }}
              className="action-btn"
              disabled={!formik.isValid}
              type="submit"
            >
              Register
            </button>
            <button
              className="cancel-btn"
              style={{
                marginLeft: "0.5rem",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </ReactModal>
  );
};
