import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  asChild,
  className,
  ...rest
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-2 px-10 rounded-lg w-auto bg-gray-700 font-semibold text-xl hover:bg-gray-900 transition-colors focus:ring-2 ring-zinc-200",
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export { Button };
