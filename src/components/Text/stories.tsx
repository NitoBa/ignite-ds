import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from ".";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "My Text",
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
} as Meta<TextProps>;

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Medium: StoryObj<TextProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>My Text component</p>,
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
