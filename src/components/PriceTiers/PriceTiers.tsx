import { ITier } from '../../typings/types';
import PriceTier from '../PriceTier';

export interface PurePriceTiersProps {
  tiers?: Array<ITier>;
}

export const PurePriceTiers = ({ tiers }: PurePriceTiersProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
      {tiers?.map((tier) => (
        <PriceTier tier={tier} key={tier.name} />
      ))}
    </div>
  );
};
