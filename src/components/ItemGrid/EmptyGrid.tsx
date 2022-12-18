import EmptyCard from '@/components/EmptyCard';

type EmptyGridProps = {
  count?: number;
};

export const EmptyGrid = ({ count = 10 }: EmptyGridProps) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
      {[...Array(count)].map((x, i) => (
        <EmptyCard key={i} />
      ))}
    </div>
  );
};
