import { Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Base/Button",
  component: Button,
  args: {
    children: "Button",
  },
} as Meta;

export const Primary = {
  args: {
    color: "primary",
  },
};

export const Secondary = {
  args: {
    color: "secondary",
  },
};

export const Accent = {
  args: {
    color: "accent",
  },
};

export const Info = {
  args: {
    color: "info",
  },
};

export const Success = {
  args: {
    color: "success",
  },
};

export const Warning = {
  args: {
    color: "warning",
  },
};

export const Error = {
  args: {
    color: "error",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};

export const Medium = {
  args: {
    size: "md",
  },
};

export const Small = {
  args: {
    size: "sm",
  },
};

export const XSmall = {
  args: {
    size: "xs",
  },
};

export const Wide = {
  args: {
    shape: "wide",
  },
};

export const Block = {
  args: {
    shape: "block",
  },
};

export const Circle = {
  args: {
    shape: "circle",
  },
};

export const Square = {
  args: {
    shape: "square",
  },
};

export const Ghost = {
  args: {
    variant: "ghost",
  },
};

export const Link = {
  args: {
    variant: "link",
  },
};

export const Outline = {
  args: {
    variant: "outline",
  },
};

export const Glass = {
  args: {
    variant: "glass",
  },
};

export const NoAnimation = {
  args: {
    animation: "no-animation",
  },
};

export const Loading = {
  args: {
    loading: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Active = {
  args: {
    active: true,
  },
};
