import { IItem } from "../../typings/types";

export interface ResultCardProps {
  directory?: string;
  item: IItem;
}

export const ResultCard = ({
  directory,
  item: { mint, data },
}: ResultCardProps) => {
  return (
    <div className='flex flex-col rounded-md shadow overflow-hidden'>
      <div className='flex-shrink-0 bg-blue-200'>
        <a href={data.image} target='_blank' rel='noreferrer'>
          <img
            className='h-54 w-full object-scale-down'
            style={{ minHeight: "100px" }}
            src={data.image}
            alt=''
          />
        </a>
      </div>
      <div className='flex-1 bg-white dark:bg-gray-800 p-4 flex justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-semibold text-gray-900 dark:text-gray-100'>
            <a
              className='text-blue-600 hover:text-blue-900'
              href={`${directory}/${mint}.json`}
              target='_blank'
              rel='noreferrer'>
              {mint}
            </a>
          </p>
          <p className='mt-1 text-xs text-gray-600 dark:text-gray-300 truncate'>
            {data.name}
          </p>
        </div>
        <div className='flex flex-col items-end'>
          <div className='flex-shrink-0'>

          </div>
        </div>
      </div>
    </div>
  );
};
