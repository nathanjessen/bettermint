import { tiers } from "@/data/tiers";
import type { Meta, StoryObj } from "@storybook/react";
import { PriceTier } from "./PriceTier";

const meta = {
  title: "Components/PriceTier",
  component: PriceTier,
  args: {
    tier: tiers[0],
  },
} satisfies Meta<typeof PriceTier>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
