import { Meta, StoryObj } from "@storybook/react";
import { CheckBox, CheckBoxProps } from ".";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {
  args: {
    onValueChange: console.log,
  },
};
