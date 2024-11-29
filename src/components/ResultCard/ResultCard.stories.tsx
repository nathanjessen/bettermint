import { items } from "@/data/items";
import type { Meta, StoryObj } from "@storybook/react";
import { ResultCard } from "./ResultCard";

const meta = {
  title: "Components/ResultCard",
  component: ResultCard,
  args: {
    item: items[0],
  },
} satisfies Meta<typeof ResultCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Directory: Story = {
  args: {
    directory: "directoryPath",
  },
};
