import { useEffect, useState } from "react";
import { items } from "../../data/items";
import { IItem, ICollection } from "../../typings/types";
import { CollectionDetails } from "../../components/CollectionDetails";
import { ItemGrid } from "../../components/ItemGrid";
import PriceTiers from "../../components/PriceTiers";

const SniperTool = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [contractAddress, setContractAddress] = useState<string>('');
  const [collection, setCollection] = useState<ICollection | undefined>();
  const [directory, setDirectory] = useState<string>('');
  const [recent, setRecent] = useState<Array<IItem>>([]);
  const [upcoming, setUpcoming] = useState<Array<IItem>>([]);
  // TODO: choose explorer for currently selected network
  const blockExplorer = 'https://ftmscan.com/token/';
  const [currContractAddress, setCurrContractAddress] = useState<string>('');
  let tempItems: Array<any> = [];
  let prevItems: Array<any> = [];

  const onEnter = (event: any) => {
    if (event.charCode === 13) {
      onGetCollection();
    }
  };

  // Upcoming Items
  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const current = Number(collection?.current) || 0;

      const prev = current >= 5 ? current - 5 : 0;
      const target = current + 15;

      try {
        if (directory.length) {
          for (let i = prev, j = target; i < j; i++) {
            await fetch(`${directory}/${i}.json`)
              .then((res) => res.json())
              .then((res) => {
                if (i < current) {
                  prevItems.push({
                    mint: i,
                    data: res,
                  });
                } else {
                  tempItems.push({
                    mint: i,
                    data: res,
                  });
                }
              });
          }
        }
      } catch (error) {
        console.log('Failed to fetch');
      }

      // setRecent(prevItems);
      setRecent(items.slice(0, 5));
      // setUpcoming(tempItems);
      setUpcoming(items.slice(5, items.length));
    };

    getItems().then(() => setLoading(false));
  }, [collection]);

  const onGetCollection = () => {
    // TODO: temp data
    setCollection({
      name: "Name of Collection",
      directory:
        "https://ipfs.io/ipfs/QmSZqMMGcAosPVKRVTo6Jydo5ZwkXMDSvWmsKiJuWzXAQX",
      current: 46,
      max: 8888
    });
    setDirectory(collection?.directory || collection?.metadata || collection?.api || '');
    setCurrContractAddress(contractAddress);
    // setCurrent(0);
    // setTimeout(() => {
    //   setCurrent(current + 1);
    // }, 2000);
  };

  return (
    <div className='md:flex gap-4'>
      <div className='md:w-1/3 p-4 max-h-screen md:sticky top-0'>
        <div>
          <label htmlFor="contractAddress">
            Contract Address
          </label>

          <div className="flex">
            <input
              type="text"
              name="contractAddress"
              id="contractAddress"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              onKeyPress={(e) => onEnter(e)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-l-md flex-grow z-10"
              placeholder="0xd5eb80f437c318b3bf8b3af985224966a3054f76"
            />
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              onClick={onGetCollection}>
              Go
            </button>
          </div>
        </div>

        {collection && (
          <>
            <CollectionDetails collection={collection} explorer={blockExplorer + currContractAddress} />

            <div className="mt-8">
              <PriceTiers />
            </div>
          </>
        )}
      </div>

      <div className="md:w-2/3 p-4 bg-gray-200 min-h-screen">
        {collection && (
          <ItemGrid loading={loading} upcoming={upcoming} recent={recent} collection={collection} directory={directory} />
        )}
      </div>
    </div>
  );
};

export default SniperTool;
