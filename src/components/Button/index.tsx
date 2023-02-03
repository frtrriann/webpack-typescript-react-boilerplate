import clsx from "clsx";
import { FunctionComponent, JSX } from "preact";
import buttonStyles from "./style.module.css";

type ButtonProps = Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'size'> & {
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
