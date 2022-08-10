import BenefitList from '../BenefitList';
import ContractSearch from '../ContractSearch';

export const SearchHero = () => {
  return (
    <div className='bg-primary pt-8 pb-16'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between'>
        <ContractSearch />
        <BenefitList />
      </div>
    </div>
  );
};
