import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export type TextProps = {
  asChild?: boolean;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export function Text({ size = "md", asChild, children }: TextProps) {
  const Component = asChild ? Slot : "span";

  const textClasses = clsx("text-gray-100 font-sans", {
    "text-xs": size === "sm",
    "text-sm": size === "md",
    "text-md": size === "lg",
  });

  return <Component className={textClasses}>{children}</Component>;
}
