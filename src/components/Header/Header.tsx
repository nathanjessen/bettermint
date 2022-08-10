import { PATH_HOME, PATH_PRICING, PATH_RESULTS } from 'constants/paths';
import { Link } from 'react-location';

export const Header = () => {
  return (
    <div className='bg-primary p-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center'>
        <Link to={PATH_HOME}>
          <div className='flex items-center space-x-2'>
            <img
              src='/logo192.png'
              alt='Mint logo'
              className='w-8 h-8 inline-block'
            />
            <h1 className='text-2xl md:text-3xl text-white lowercase flex items-center'>
              Better<span className='font-semibold'>mint</span>
            </h1>
          </div>
        </Link>

        <nav>
          <ul className='menu menu-horizontal text-primary-content'>
            <li>
              <Link to={PATH_RESULTS}>Results</Link>
            </li>
            <li>
              <Link to={PATH_PRICING}>Pricing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
