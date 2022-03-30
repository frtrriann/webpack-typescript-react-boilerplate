import clsx from "clsx";
import { FC } from "react";
import buttonStyles from "./style.module.css";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  size = "medium",
  children,
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(buttonStyles.button, buttonStyles[`button-${size}`])}
    >
      {children}
    </button>
  );
};
