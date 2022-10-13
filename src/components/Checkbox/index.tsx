import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
export type CheckBoxProps = {
  onValueChange: (value: boolean) => void;
};

export function CheckBox({ onValueChange }: CheckBoxProps) {
  return (
    <Checkbox.Root
      className="flex items-center justify-center w-6 h-6 rounded bg-gray-800"
      onCheckedChange={onValueChange}
    >
      <Checkbox.Indicator>
        <Check weight="bold" className="text-cyan-500 w-5 h-5" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
