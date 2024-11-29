import { tiers } from "@/data/tiers";
import type { Meta, StoryObj } from "@storybook/react";
import { PriceTiers } from "./PriceTiers";

const meta = {
  title: "Components/PriceTiers",
  component: PriceTiers,
  args: {
    tiers,
  },
} satisfies Meta<typeof PriceTiers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
