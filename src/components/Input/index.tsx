import inputStyles from "./style.module.css";
import { InputHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface InputProps {
  size?: "small" | "medium" | "large";
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export const Input: FC<InputProps> = ({ size = "medium", inputProps ={} }) => {
  return (
    <input
      className={clsx(inputStyles.input, inputStyles[`input-${size}`])}
      {...inputProps}
    />
  );
};
