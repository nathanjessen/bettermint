import type { Meta, StoryObj } from "@storybook/react";
import { EmptyCard } from "./EmptyCard";

const meta = {
  title: "Components/EmptyCard",
  component: EmptyCard,
} satisfies Meta<typeof EmptyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
