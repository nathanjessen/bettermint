import { Meta, Story } from '@storybook/react';
import { tiers } from '../../data/tiers';
import { IPriceTierProps, PriceTier } from './PriceTier';

export default {
  title: 'Components/PriceTier',
  component: PriceTier,
  args: {
    tier: tiers[0],
  },
} as Meta;

const Template: Story<IPriceTierProps> = (args) => <PriceTier {...args} />;

export const Default = Template.bind({});
Default.args = {};
