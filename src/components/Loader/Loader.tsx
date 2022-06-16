import ReactLoading from 'react-loading';

export const Loader = () => {
  return (
    <ReactLoading
      type='bars'
      color='currentColor'
      className='text-blue-600 dark:text-blue-500'
    />
  );
};