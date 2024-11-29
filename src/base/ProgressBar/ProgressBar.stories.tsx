import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Base/ProgressBar",
  component: ProgressBar,
  args: {
    value: 0
  }
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    value: 0
  },
};

export const Half: Story = {
  args: {
    value: 50
  },
};

export const Full: Story = {
  args: {
    value: 100
  },
};
