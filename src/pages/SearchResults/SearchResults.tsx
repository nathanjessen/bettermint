import { useEffect, useState } from "react";
import useSWR from "swr";
import { ICollection, IItem } from "../../typings/types";
import CollectionDetails from "../../components/CollectionDetails";
import { items } from "../../data/items";
import ItemGrid, { EmptyGrid } from "../../components/ItemGrid";
import useContractAddress from '../../hooks/useContractAddress';
import useExplorer from "../../hooks/useExplorer";
import { Button } from "../../base/Button/Button";
import { Layout, LayoutLeft, LayoutRight } from "../../base/Layout";
import { collections } from "../../data/collections";

const fetcher = (url: string) => fetch(url).then(resp => resp.json());

export const SearchResults = () => {
  // const { data } = useSWR("https://dog.ceo/api/breeds/image/random", fetcher, { suspense: true });
  const [collection, setCollection] = useState<ICollection | undefined>();
  const { contractAddress, resetContractAddress } = useContractAddress();
  const { addressExplorer, resetExplorer } = useExplorer();
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
      setCollection(collections[0]);
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
    <Layout>
      <LayoutLeft>
        <div className="space-x-2">
          <Button color="primary" variant="outline" onClick={onReset}>Reset</Button>

          <Button color="primary" as="a" href={addressExplorer} target="_blank" rel="noreferrer">
            View on Explorer
          </Button>
        </div>

        {collection && (
          <CollectionDetails collection={collection} explorerUrl={addressExplorer} />
        )}
      </LayoutLeft>

      <LayoutRight>
        {collection ? (
          <ItemGrid contractAddress={contractAddress} recent={recent} upcoming={upcoming} directory={directory} />
        ) : (
          <EmptyGrid count={15} />
        )}
      </LayoutRight>
    </Layout>
  );
};
