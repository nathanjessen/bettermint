import type { Meta, StoryObj } from "@storybook/react";
import { SearchResults } from "./SearchResults";

const meta = {
  title: "Pages/SearchResults",
  component: SearchResults,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
