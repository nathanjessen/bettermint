import { ElementType } from "react";
import { PolymorphicComponentProp } from "../../typings/polymorphic";

type ItemProps = {
  title?: string;
  description?: string;
};

export const BenefitListItem = <C extends ElementType = "li">({ as, title, description, ...rest }: PolymorphicComponentProp<C, ItemProps>) => {
  const Component = as || "li";

  return (
    <Component className="p-4 pb-6" {...rest}>
      <p className="text-white font-semibold text-lg mb-2">{title}</p>
      <p className="text-primary-content">{description}</p>
    </Component>
  );
};