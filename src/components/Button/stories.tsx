import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "My Button",
    full: false,
  },
  argTypes: {
    size: {
      defaultValue: "md",
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<ButtonProps>;

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: "lg",
  },
};

export const Disable: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <a href="#">My Link component</a>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
