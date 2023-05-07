import clsx from "clsx";
import { FunctionComponent,ButtonHTMLAttributes } from "react";
import buttonStyles from "./style.module.css";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> & {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children?: string;
} 

export const Button: FunctionComponent<ButtonProps> = ({
  size = "medium",
  children,
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(buttonStyles.button, buttonStyles[`button-${size}`])}
      {...props}
    >
      {children ?? null}
    </button>
  );
};
