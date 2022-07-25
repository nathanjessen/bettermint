import { Story, Meta } from '@storybook/react';
import { tiers } from '../../data/tiers';
import { PriceTiers, IPriceTiersProps } from './PriceTiers';

export default {
  title: "Components/PriceTiers",
  component: PriceTiers,
  args: {
    tiers
  }
} as Meta;

const Template: Story<IPriceTiersProps> = (args) => <PriceTiers {...args} />;

export const Default = Template.bind({});
Default.args = {};
