import { rest } from "msw";
import { API_RESULTS, API_PRICING } from "../constants/api";
import { tiers } from '../data/tiers';
import { items } from '../data/items';

const pricingHandler = rest.get(API_PRICING, (req, res, ctx) => {
  return res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json(items)
  );
});

const resultsHandler = rest.get(API_RESULTS, (req, res, ctx) => {
  return res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json(tiers)
  );
});

export const handlers = [
  pricingHandler,
  resultsHandler,
];
