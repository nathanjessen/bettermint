import { useEffect, useState } from "react";
import useSWR from "swr";
import { ICollection, IItem } from "../../typings/types";
import CollectionDetails from "../../components/CollectionDetails";
import EmptyCard from "../../components/EmptyCard";
import ItemGrid from "../../components/ItemGrid";
import { items } from "../../data/items";
import ResetButton from "../../components/ResetButton";
import useContractAddress from '../../hooks/useContractAddress';
import useExplorer from "../../hooks/useExplorer";
import ExplorerButton from "../../components/ExplorerButton";

const fetcher = (url: string) => fetch(url).then(resp => resp.json());

export const SearchResults = () => {
  const { data } = useSWR("https://dog.ceo/api/breeds/image/random", fetcher, { suspense: true });
  const [collection, setCollection] = useState<ICollection | undefined>();
  const { contractAddress, resetContractAddress } = useContractAddress();
  const { explorer, resetExplorer, setExplorer } = useExplorer();
  const [loading, setLoading] = useState<boolean>(false);
  const [directory, setDirectory] = useState<string>('');
  const [recent, setRecent] = useState<Array<IItem>>([]);
  const [upcoming, setUpcoming] = useState<Array<IItem>>([]);
  let tempItems: Array<IItem> = [];
  let prevItems: Array<IItem> = [];

  const onReset = () => {
    setCollection(undefined);
    resetContractAddress();
  };

  useEffect(() => {
    // TODO: temp data
    // Check ABI for each method
    // Each key is a Read from the contract.
    // current updates after every new block
    // tokenURI returns url to json
    if (contractAddress) {
      setCollection({
        name: "Binary Punks",
        symbol: "PUNKS",
        totalSupply: 9999,
        directory:
          "https://ipfs.io/ipfs/QmSZqMMGcAosPVKRVTo6Jydo5ZwkXMDSvWmsKiJuWzXAQX",
        current: 426,
      });
    }

    // https://api.ftmscan.com/api?module=contract&action=getabi&address=${BINARY_PUNKS_FANTOM_ADDRESS}
    // setExplorer(BLOCK_EXPLORER + contractAddress);

    return () => resetExplorer();
  }, [contractAddress]);

  useEffect(() => {
    // TODO: update with common options
    setDirectory(collection?.directory || collection?.metadata || collection?.api || '');

    return () => setDirectory('');
  }, [collection]);


  // Upcoming Items
  useEffect(() => {
    let controller = new AbortController();

    const getItems = async () => {
      setLoading(true);
      const current = Number(collection?.current) || 0;

      const prev = current >= 5 ? current - 5 : 0;
      const target = current + 15;

      try {
        if (directory.length) {
          for (let i = prev, j = target; i < j; i++) {
            await fetch(`${directory}/${i}.json`, {
              signal: controller.signal,
            })
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

    return () => controller?.abort();
  }, [collection]);


  return (
    <div className='md:flex gap-4'>
      <div className='md:w-1/3 p-4 max-h-screen md:sticky top-0'>
        <ResetButton onReset={onReset} />
        <ExplorerButton />

        {collection && (
          <CollectionDetails collection={collection} />
        )}
      </div>

      <div className="md:w-2/3 p-4 bg-gray-200 min-h-screen">
        {collection ? (
          <ItemGrid contractAddress={contractAddress} recent={recent} upcoming={upcoming} directory={directory} />
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {[...Array(15)].map((x, i) => <EmptyCard key={i} />)}
          </div>
        )}
      </div>
    </div>
  );
};
