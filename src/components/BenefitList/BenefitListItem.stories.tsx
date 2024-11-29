import type { Meta, StoryObj } from "@storybook/react";
import { BenefitListItem } from "./BenefitListItem";

const meta = {
  title: "Components/BenefitListItem",
  component: BenefitListItem,
  decorators: [(Story) => (
    <ul>
      <Story />
    </ul>
  )],
} satisfies Meta<typeof BenefitListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Content: Story = {
  args: {
    title: "Preview",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
};
