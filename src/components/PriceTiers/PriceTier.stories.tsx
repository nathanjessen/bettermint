import { tiers } from "@/data/tiers";
import { Meta } from "@storybook/react";
import { PriceTier } from "./PriceTier";

export default {
  title: "Components/PriceTier",
  component: PriceTier,
  args: {
    tier: tiers[0],
  },
} as Meta;

export const Default = {
  args: {},
};
