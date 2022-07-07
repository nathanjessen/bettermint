import { Story, Meta } from '@storybook/react';
import { tiers } from '../../data/tiers';
import { PriceTiers, IPriceTiersProps } from './PriceTiers';

export default {
  title: "Components/PriceTiers",
  component: PriceTiers,
} as Meta;

const Template: Story<IPriceTiersProps> = (args) => <PriceTiers {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const HasTiers = Template.bind({});
HasTiers.args = {
  tiers: tiers,
};
