import { ZERO_ADDRESS } from '@/constants/index';
import { Meta } from '@storybook/react';
import { PureContractSearch } from './ContractSearch';

export default {
  title: 'Components/ContractSearch',
  component: PureContractSearch,
  args: {
    contractAddress: ZERO_ADDRESS,
  },
} as Meta;

export const Default = {
  args: {},
};
