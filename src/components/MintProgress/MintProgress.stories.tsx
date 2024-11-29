import { collections } from "@/data/collections";
import type { Meta, StoryObj } from "@storybook/react";
import { PureMintProgress } from "./MintProgress";

const meta = {
  title: "Components/PureMintProgress",
  component: PureMintProgress,
} satisfies Meta<typeof PureMintProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collection: Story = {
  args: {
    collection: collections[0],
  },
};
