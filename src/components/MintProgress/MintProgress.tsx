import { useEffect, useState } from 'react';
import { ICollection } from "../../typings/types";

export interface PureMintProgressProps {
  collection: ICollection;
}

export const PureMintProgress = ({ collection }: PureMintProgressProps) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const curr = Number(collection.current) || 0;
    const totalSupply = Number(collection.totalSupply) || 10000;
    const val = Math.ceil(curr / totalSupply * 100);
    setProgress(val);

    return () => {
      setProgress(0);
    };
  }, [collection]);

  return (
    <div aria-hidden="true">
      <div className="bg-gray-200 rounded-full overflow-hidden">
        <div className="h-2 bg-indigo-600 rounded-full" style={{ width: progress + '%' }} />
      </div>
      <div className="hidden sm:grid grid-cols-3 text-sm font-medium text-gray-600 mt-4">
        <div className="text-left">0</div>
        <div className="text-center text-xl text-indigo-600">{collection.current}</div>
        <div className="text-right">{collection.totalSupply}</div>
      </div>
    </div>
  );
};