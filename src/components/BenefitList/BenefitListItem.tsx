import { PolymorphicComponentProp } from '@/typings/polymorphic';
import { ElementType } from 'react';

export type BenefitListItemProps = {
  title?: string;
  description?: string;
};

export const BenefitListItem = <C extends ElementType = 'li'>({
  as,
  title,
  description,
  ...rest
}: PolymorphicComponentProp<C, BenefitListItemProps>) => {
  const Component = as || 'li';

  return (
    <Component className='p-4 pb-6' {...rest}>
      <p className='text-white font-semibold text-lg mb-2'>{title}</p>
      <p className='text-primary-content'>{description}</p>
    </Component>
  );
};
