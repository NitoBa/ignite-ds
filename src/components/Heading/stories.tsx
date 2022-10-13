import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "My Heading",
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
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>My Heading component</h1>,
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
