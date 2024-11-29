import { Meta } from "@storybook/react";
import { unorderedList } from "../../../.storybook/decorators";
import { BenefitListItem } from "./BenefitListItem";

export default {
  title: "Components/BenefitListItem",
  component: BenefitListItem,
  decorators: [unorderedList],
} as Meta;

export const Empty = {
  args: {},
};

export const Content = {
  args: {
    title: "Preview",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
};
