import { tiers } from "@/data/tiers";
import { Meta } from "@storybook/react";
import { PriceTiers } from "./PriceTiers";

export default {
  title: "Components/PriceTiers",
  component: PriceTiers,
  args: {
    tiers,
  },
} as Meta;

export const Default = {
  args: {},
};
