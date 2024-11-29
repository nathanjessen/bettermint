import type { Meta, StoryObj } from "@storybook/react";
import { EmptyGrid } from "./EmptyGrid";

const meta = {
  title: "Components/EmptyGrid",
  component: EmptyGrid,
} satisfies Meta<typeof EmptyGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Count: Story = {
  args: {
    count: 5,
  },
};
