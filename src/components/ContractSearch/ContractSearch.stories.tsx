import { Story, Meta } from '@storybook/react';
import { ZERO_ADDRESS } from '../../constants';

import { PureContractSearch, IPureContractSearchProps } from './ContractSearch';

export default {
  title: "Components/ContractSearch",
  component: PureContractSearch,
  args: {
    contractAddress: ZERO_ADDRESS
  },
} as Meta;

const Template: Story<IPureContractSearchProps> = (args) => <PureContractSearch {...args} />;

export const Default = Template.bind({});
Default.args = {};
