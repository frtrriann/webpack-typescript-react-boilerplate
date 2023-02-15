import inputStyles from "./style.module.css";
import clsx from "clsx";
import { FunctionComponent, HTMLAttributes } from "react";

interface InputProps {
  size?: "small" | "medium" | "large";
  inputProps?: HTMLAttributes<HTMLInputElement>;
}

export const Input: FunctionComponent<InputProps> = ({ size = "medium", inputProps = {} }) => {
  return (
    <input
      className={clsx(inputStyles.input, inputStyles[`input-${size}`])}
      {...inputProps}
    />
  );
};
