import ReactLoading from 'react-loading';

export const Loader = () => {
  return (
    <ReactLoading
      type='bars'
      color='currentColor'
      className='text-green-600 dark:text-green-500'
    />
  );
};