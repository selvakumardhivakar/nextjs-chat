import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  isLoading,
  ...props
}) => {
  return (
    <button className={className} disabled={isLoading} {...props}>
      {children}
    </button>
  );
};

export default Button;
