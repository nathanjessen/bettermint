import { Story, Meta } from '@storybook/react';
import { tiers } from '../../data/tiers';
import { PriceTier, IPriceTierProps } from './PriceTier';

export default {
  title: "Components/PriceTier",
  component: PriceTier,
} as Meta;

const Template: Story<IPriceTierProps> = (args) => <PriceTier {...args} />;

export const Tier = Template.bind({});
Tier.args = {
  tier: tiers[0],
};
