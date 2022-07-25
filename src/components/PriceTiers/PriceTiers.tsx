import { ITier } from '../../typings/types';
import { PriceTier } from './PriceTier';

export interface IPriceTiersProps {
  tiers: Array<ITier>;
}

export const PriceTiers = ({ tiers }: IPriceTiersProps) => {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {tiers.map(tier => (
        <PriceTier tier={tier} key={tier.name} />
      ))}
    </div>
  );
};
