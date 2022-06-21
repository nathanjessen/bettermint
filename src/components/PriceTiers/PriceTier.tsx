import { ITier } from "../../typings/types";

export interface IPriceTierProps {
  tier: ITier;
}

export const PriceTier = ({ tier }: IPriceTierProps) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="mb-4 text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
        <p className="mb-8 text-sm text-gray-500">{tier.description}</p>
        <p className="mb-8">
          <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>{' '}
          <span className="text-base font-medium text-gray-500">ETH</span>
        </p>
        <button
          type="button"
          className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
        >
          Buy {tier.name}
        </button>
      </div>
    </div>
  );
};