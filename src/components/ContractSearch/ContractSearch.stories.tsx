import { ZERO_ADDRESS } from "@/constants/index";
import type { Meta, StoryObj } from "@storybook/react";
import { PureContractSearch } from "./ContractSearch";

const meta = {
  title: "Components/ContractSearch",
  component: PureContractSearch,
  args: {
    contractAddress: ZERO_ADDRESS,
  },
} satisfies Meta<typeof PureContractSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
