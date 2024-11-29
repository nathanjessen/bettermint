import { collections } from "@/data/collections";
import type { Meta, StoryObj } from "@storybook/react";
import { CollectionDetails } from "./CollectionDetails";

const meta = {
  title: "Components/CollectionDetails",
  component: CollectionDetails,
} satisfies Meta<typeof CollectionDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    collection: collections[0],
  },
};
