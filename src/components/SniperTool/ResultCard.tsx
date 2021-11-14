export interface ResultCardProps {
  item: any;
}

export const ResultCard = ({
  item: { mint, data, type, rank },
}: ResultCardProps) => {
  const itemNum = data.name.substring(
    data.name.indexOf("#") + 1,
    data.name.length
  );

  const image = data.image
    ? data.image
    : `https://ipfs.io/ipfs/QmaiABQ2BWfJBD63vQjZjCBLZcUjhe6LkNxTRptuS6Yhoy/${itemNum}.png`;
  const directory =
    "https://ipfs.io/ipfs/QmSZqMMGcAosPVKRVTo6Jydo5ZwkXMDSvWmsKiJuWzXAQX";

  return (
    <div className='flex flex-col rounded-md shadow overflow-hidden'>
      <div className='flex-shrink-0'>
        {/* ?method=statistical&weights=on&propWeights=%24Punk%2520Type%3A1%26Skin%2520Tone%3A0%26Full%2520Type%3A1 */}
        <a href={image} target='_blank' rel='noreferrer'>
          <img
            className='h-54 w-full object-scale-down'
            style={{ minHeight: "100px" }}
            src={image}
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
            #{itemNum}
          </p>
        </div>
        <div className='flex flex-col items-end'>
          <div className='flex-shrink-0'>
            {/* ?method=statistical&weights=on&propWeights=%24Punk%2520Type%3A1%26Skin%2520Tone%3A0%26Full%2520Type%3A1 */}
            <a
              className='text-blue-600 hover:text-blue-900 text-xs'
              href={`https://rarity.tools/cryptopunks/view/${itemNum}`}
              target='_blank'
              rel='noreferrer'>
              {rank}
            </a>
          </div>
          {type && (
            <div className='text-xs font-medium text-green-600 dark:text-green-500 flex gap-2'>
              {type}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
