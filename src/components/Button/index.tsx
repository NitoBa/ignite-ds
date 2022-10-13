import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  asChild?: boolean;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  full?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  asChild,
  size = "md",
  full,
  children,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  const classes = clsx(
    `text-black
    bg-cyan-500
    rounded
    font-semibold
    flex
    items-center
    justify-center
    transition-all
    duration-300
    enabled:hover:bg-cyan-300
    disabled:cursor-not-allowed
    disabled:opacity-60
    focus:ring-2
    focus:ring-offset-2
    focus:ring-gray-100
    outline-0
    `,
    {
      "w-full": full,
      "p-2 text-xs": size === "sm",
      "px-4 py-3 text-sm": size === "md",
      "px-5 py-4 text-md": size === "lg",
    },
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
