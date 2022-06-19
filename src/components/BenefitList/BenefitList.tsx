import { benefits } from '../../data/benefits';

export const BenefitList = () => {
  return (
    <ul className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-green-500 text-white">
      {benefits.map((item, i) => (
        <li key={i} className="p-4 pb-6">
          <p className='font-semibold text-lg mb-2'>{item.title}</p>
          <p className="text-green-100">{item.description}</p>
        </li>
      ))}
    </ul>
  );
};