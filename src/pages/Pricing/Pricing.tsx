import Header from '@/components/Header';
import PriceTiers from '@/components/PriceTiers';
import { tiers } from '@/data/tiers';

export const Pricing = () => {
  return (
    <div>
      <Header />
      <PriceTiers tiers={tiers} />
    </div>
  );
};
