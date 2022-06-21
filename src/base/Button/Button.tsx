import { ElementType } from 'react';
import { PolymorphicComponentProp } from '../../typings/polymorphic';

type ButtonProps = {};

export const Button = <C extends ElementType = "button">({ as, children, ...rest }: PolymorphicComponentProp<C, ButtonProps>) => {
  const Component = as || "button";

  return (
    <Component
      className="relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
      {...rest}>
      {children}
    </Component>
  );
};