import Header from '../../components/Header';
import SearchHero from '../../components/SearchHero';

export const LandingPage = () => {
  return (
    <div className='h-screen grid grid-flow-row'>
      <Header />
      <SearchHero />
    </div>
  );
};
