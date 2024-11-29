import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Base/Button",
  component: Button,
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Accent: Story = {
  args: {
    color: "accent",
  },
};

export const Info: Story = {
  args: {
    color: "info",
  },
};

export const Success: Story = {
  args: {
    color: "success",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
  },
};

export const Error: Story = {
  args: {
    color: "error",
  },
};

export const XSmall: Story = {
  args: {
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Wide: Story = {
  args: {
    shape: "wide",
  },
};

export const Block: Story = {
  args: {
    shape: "block",
  },
};

export const Circle: Story = {
  args: {
    shape: "circle",
  },
};

export const Square: Story = {
  args: {
    shape: "square",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
  },
};

export const NoAnimation: Story = {
  args: {
    animation: "no-animation",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
};
