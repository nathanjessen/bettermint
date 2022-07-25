import { Route, MakeGenerics } from 'react-location';
// import { API_PRICING, API_RESULTS } from '../constants/api';
import { PATH_HOME, PATH_PRICING, PATH_RESULTS } from '../constants/paths';
import { items } from '../data/items';
import { tiers } from '../data/tiers';
import LandingPage from "../pages/LandingPage";
import Pricing from "../pages/Pricing";
import SearchResults from "../pages/SearchResults";
import { IItem, ITier } from '../typings/types';

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    items: IItem[];
    tiers: ITier[];
  };
}>;

export const routes: Route<LocationGenerics>[] = [
  {
    path: PATH_HOME,
    element: <LandingPage />,
  },
  {
    path: PATH_RESULTS,
    element: <SearchResults />,
    loader: async () => ({
      items: await fetchResults(),
    }),
  },
  {
    path: PATH_PRICING,
    element: <Pricing />,
    loader: async () => ({
      tiers: await fetchTiers(),
    }),
  }
];

async function fetchTiers() {
  // const tiers = await fetch(API_PRICING);
  return tiers;
}

async function fetchResults() {
  // const items = await fetch(API_RESULTS);
  return items;
}
