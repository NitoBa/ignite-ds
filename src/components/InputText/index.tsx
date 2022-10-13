import { InputHTMLAttributes, cloneElement, ReactNode } from "react";

export type TextInputRootProps = {
  children: ReactNode;
};

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="group h-12 flex gap-3 px-4 py-3 bg-gray-800 focus-within:ring-1 focus-within:ring-cyan-500 rounded items-center transition-all duration-300">
      {children}
    </div>
  );
}
TextInputRoot.displayName = "TextInput.Root";

export type TextInputIconProps = TextInputRootProps;

export function TextInputIcon({ children }: TextInputIconProps) {
  return cloneElement(children as any, {
    className:
      "w-5 h-5 transition-all duration-300 text-gray-400 group-focus-within:text-cyan-500",
  });
}
TextInputIcon.displayName = "TextInput.Icon";

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput({ ...props }: InputTextProps) {
  return (
    <input
      className="flex-1 h-full border-0 outline-0 bg-transparent text-gray-100 text-xs placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-40"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
