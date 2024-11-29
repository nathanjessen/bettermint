import { items } from '@/data/items';
import { tiers } from '@/data/tiers';
import { http, HttpResponse, delay } from 'msw';
import { API_PRICING, API_RESULTS } from '../constants/api';

const pricingHandler = http.get(API_PRICING, async () => {
  await delay(500);
  return HttpResponse.json(items);
});

const resultsHandler = http.get(API_RESULTS, async () => {
  await delay(500);
  return HttpResponse.json(tiers);
});

export const handlers = [pricingHandler, resultsHandler];
