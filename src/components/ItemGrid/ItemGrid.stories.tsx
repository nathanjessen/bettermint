import { ZERO_ADDRESS } from "@/constants/index";
import { items } from "@/data/items";
import type { Meta, StoryObj } from "@storybook/react";
import { ItemGrid } from "./ItemGrid";

const meta = {
  title: "Components/ItemGrid",
  component: ItemGrid,
  args: {
    contractAddress: ZERO_ADDRESS,
  },
} satisfies Meta<typeof ItemGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const RecentItems: Story = {
  args: {
    items: items.slice(0, 5),
  },
};

export const Directory: Story = {
  args: {
    directory: "directoryname",
  },
};
