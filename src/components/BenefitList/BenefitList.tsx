import { ElementType } from 'react';
import { benefits } from '../../data/benefits';
import { PolymorphicComponentProp } from '../../typings/polymorphic';
import { BenefitListItem } from './BenefitListItem';

export type BenefitListProps = {};

export const BenefitList = <C extends ElementType = 'ul'>({
  as,
  ...rest
}: PolymorphicComponentProp<C, BenefitListProps>) => {
  const Component = as || 'ul';
  const itemAs = Component === 'ul' || Component === 'ol' ? 'li' : 'div';

  return (
    <Component
      className='grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-content'
      {...rest}>
      {benefits.map((item, i) => (
        <BenefitListItem
          key={i}
          as={itemAs}
          title={item.title}
          description={item.description}
        />
      ))}
    </Component>
  );
};
