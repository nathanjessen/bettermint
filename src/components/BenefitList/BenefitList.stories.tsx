import type { Meta, StoryObj } from "@storybook/react";
import { BenefitList } from "./BenefitList";

const meta = {
  title: "Components/BenefitList",
  component: BenefitList,
} satisfies Meta<typeof BenefitList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
