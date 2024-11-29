import { Meta } from "@storybook/react";
import { EmptyGrid } from "./EmptyGrid";

export default {
  title: "Components/EmptyGrid",
  component: EmptyGrid,
} as Meta;

export const Default = {
  args: {},
};

export const Count = {
  args: {
    count: 5,
  },
};
