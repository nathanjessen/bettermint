import ContractSearch from "../ContractSearch";
import Header from "../Header";
import BenefitList from "../BenefitList";

export const SearchHero = () => {
  return (
    <div className="bg-green-600 pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <ContractSearch />
        <BenefitList />
      </div>
    </div>
  );
};