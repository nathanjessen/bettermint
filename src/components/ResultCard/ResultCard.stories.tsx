import { items } from "@/data/items";
import { Meta } from "@storybook/react";
import { ResultCard } from "./ResultCard";

export default {
  title: "Components/ResultCard",
  component: ResultCard,
  args: {
    item: items[0],
  },
} as Meta;

export const Default = {
  args: {},
};

export const Directory = {
  args: {
    directory: "directoryPath",
  },
};
