export interface PasswordTestResult {
  message: string;
  isValid: boolean;
}

export const isPasswordValid = (password: string): PasswordTestResult => {
  if (password.length < 8) {
    return {
      message: "Password must be at least 8 characters.",
      isValid: false,
    };
  }

  const strongPassword = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
  );

  if (!strongPassword.test(password)) {
    return {
      message:
        "Password must contain at least 1 special character, 1 cap letter and 1 number.",
      isValid: false,
    };
  }

  return {
    isValid: true,
    message: "",
  };
};
