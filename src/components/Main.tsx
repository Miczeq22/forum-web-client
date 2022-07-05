import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props) => {
  const test = false;

  if (test) {
    throw new Error("Main fail");
  } else {
    return <main>{children}</main>;
  }
};
