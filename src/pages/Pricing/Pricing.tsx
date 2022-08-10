import { useMatch } from 'react-location';
import Header from '../../components/Header';
import PriceTiers from '../../components/PriceTiers';
import { LocationGenerics } from '../../router/routes';

export const Pricing = () => {
  const { tiers } = useMatch<LocationGenerics>().data;

  return (
    <div>
      <Header />
      {tiers ? <PriceTiers tiers={tiers} /> : null}
    </div>
  );
};
