import type { Meta, StoryObj } from "@storybook/react";
import { SearchHero } from "./SearchHero";

const meta = {
  title: "Components/SearchHero",
  component: SearchHero,
} satisfies Meta<typeof SearchHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
