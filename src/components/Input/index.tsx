import inputStyles from "./style.module.css";
import clsx from "clsx";
import { JSX, FunctionComponent } from "preact";

interface InputProps {
  size?: "small" | "medium" | "large";
  inputProps?: JSX.HTMLAttributes<HTMLInputElement>;
}

export const Input: FunctionComponent<InputProps> = ({ size = "medium", inputProps = {} }) => {
  return (
    <input
      className={clsx(inputStyles.input, inputStyles[`input-${size}`])}
      {...inputProps}
    />
  );
};
