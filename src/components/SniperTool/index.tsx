import { Fragment, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { sold } from "./sold";
import { watchlist } from "./Watchlist";
import { ResultCard } from "./ResultCard";
import { Apes } from "./Apes";

const groups = [
  { name: "Upcoming" },
  { name: "Watchlist" },
  { name: "Alien" },
  { name: "Ape" },
  { name: "Background" },
  { name: "Hostage" },
  { name: "Rank" },
  { name: "Zombie" },
  { name: "ApeOnlyIsland" },
  { name: "Owned" },
  { name: "Sold" },
];

const SniperTool = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState(groups[0]);
  const [results, setResults] = useState(watchlist);
  const [upcoming, setUpcoming] = useState<Array<any>>([]);
  const [recent, setRecent] = useState<Array<any>>([]);
  const directory =
    "https://ipfs.io/ipfs/QmSZqMMGcAosPVKRVTo6Jydo5ZwkXMDSvWmsKiJuWzXAQX";

  const [current, setCurrent] = useState<number>();
  const [inputVal, setInputVal] = useState<string | number>('');

  useEffect(() => {
    switch (selected.name) {
      case "Alien":
        setResults(watchlist.filter((item) => item.type.includes("alien")));
        break;
      case "Ape":
        setResults(watchlist.filter((item) => item.type.includes("ape")));
        break;
      case "Background":
        setResults(
          watchlist.filter((item) => item.type.includes("background"))
        );
        break;
      case "Hostage":
        setResults(watchlist.filter((item) => item.type.includes("hostage")));
        break;
      case "Rank":
        setResults(watchlist.filter((item) => item.type.includes("rank")));
        break;
      case "Zombie":
        setResults(watchlist.filter((item) => item.type.includes("zombie")));
        break;
      case "Sold":
        setResults(sold);
        break;
      case "Owned":
        setResults(sold.filter((item) => item.type.includes("owned")));
        break;
      case "Upcoming":
        setResults([...recent, ...upcoming]);
        break;
      default:
        setResults(watchlist);
    }
  }, [selected, upcoming, recent]);

  // Search for items
  // useEffect(() => {
  //   const getItems = async () => {
  //     let tempItems: Array<any> = [];
  //     const searchItems: Array<any> = ["3871"];
  //     for (let i = 0; i < 10000; i++) {
  //       await fetch(`${directory}/${i}.json`)
  //         .then((res) => res.json())
  //         .then((res) => {
  //           let itemNum = res.name.substring(
  //             res.name.indexOf("#") + 1,
  //             res.name.length
  //           );
  //           if (searchItems.indexOf(itemNum) >= 0) {
  //             tempItems.push({
  //               mint: i,
  //               data: res,
  //               type: "search",
  //               rank: "Rank"
  //             });
  //           }
  //         });
  //     }
  //     setResults(tempItems);
  //   };
  //   getItems().then(() => setLoading(false));
  // }, []);

  // Matching mint # and NFT #
  // useEffect(() => {
  //   const getItems = async () => {
  //     setLoading(true);
  //     let tempItems: Array<any> = [];

  //     for (let i = 0, j = i + 10000; i < j; i++) {
  //       await fetch(`${directory}/${i}.json`)
  //         .then((res) => res.json())
  //         .then((res) => {
  //           let num = res.name.substring(
  //             res.name.indexOf("#") + 1,
  //             res.name.length
  //           );

  //           if (i == num) {
  //             tempItems.push({
  //               mint: i,
  //               data: res,
  //               type: "matching",
  //               rank: "Rank"
  //             });
  //           }
  //         });
  //     }
  //     setResults(tempItems);
  //   };
  //   getItems().then(() => setLoading(false));
  // }, []);

  // Clown Nose
  // useEffect(() => {
  //   const getItems = async () => {
  //     setLoading(true);
  //     let tempItems: Array<any> = [];
  //     for (let i = 0; i < 1000; i++) {
  //       await fetch(`${directory}/${i}.json`)
  //         .then((res) => res.json())
  //         .then((res) => {
  //           let clown = getClown(i, res);
  //           if (clown) tempItems.push(clown);
  //         });
  //     }
  //     setResults(tempItems);
  //   };
  //   getItems().then(() => setLoading(false));
  // }, []);

  // const getClown = (i: number, data: any) => {
  //   for (let j = 0; j < data.attributes.length; j++) {
  //     if (data.attributes[j].trait_type === "Face Wear") {
  //       if (data.attributes[j].value.includes("Clown Nose")) {
  //         // only clown nose
  //         if (data.attributes[j].value !== "Clown Nose") {
  //           return {
  //             mint: i,
  //             data,
  //             type: "clownnose",
  //             rank: "Rank",
  //           };
  //         } else {
  //           return false;
  //         }
  //       }
  //     }
  //   }
  // };

  // Upcoming 25 Items
  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      if (current) {
        let tempItems: Array<any> = [];
        let prevItems: Array<any> = [];
        const prev = +current - 5;
        const target = +current + 25;

        for (let i = prev, j = target; i < j; i++) {
          await fetch(`${directory}/${i}.json`)
            .then((res) => res.json())
            .then((res) => {
              if (i < current) {
                prevItems.push({
                  mint: i,
                  data: res,
                  type: "previous",
                  rank: "Rank",
                });
              } else {
                tempItems.push({
                  mint: i,
                  data: res,
                  type: "upcoming",
                  rank: "Rank",
                });
              }

              // const type = res.attributes.find(
              //   (attr: any) => attr.trait_type === "Type"
              // )?.value;
            });
        }

        setRecent(prevItems);
        setUpcoming(tempItems);
      }
    };

    if (current) {
      getItems().then(() => setLoading(false));
    }
  }, [current]);

  const onSetCurrent = () => {
    setCurrent(+inputVal);
  };

  return (
    <div className='p-4'>
      <div className='mb-4 flex gap-4'>
        <div className="w-72">
          <Listbox value={selected} onChange={setSelected}>
            <div className='relative mt-1'>
              <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-blue-500 sm:text-sm'>
                <span className='block truncate'>{selected.name}</span>
                <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                  <SelectorIcon
                    className='w-5 h-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {groups.map((group, groupIdx) => (
                    <Listbox.Option
                      key={groupIdx}
                      className={({ active }) =>
                        `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                        }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={group}>
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${selected ? "font-medium" : "font-normal"
                              } block truncate`}>
                            {group.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${active ? "text-amber-600" : "text-amber-600"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}>
                              <CheckIcon className='w-5 h-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="w-96 flex">
          <label htmlFor="currentMint" className="sr-only">
            Current
          </label>
          <input
            type="number"
            name="currentMint"
            id="currentMint"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-l-md"
            placeholder="4480"
          />
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={onSetCurrent}>
            Go
          </button>
        </div>
      </div>

      <h1 className='text-3xl mb-3'>{selected.name}</h1>
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4'>
        {loading ? (
          <ReactLoading
            type='bubbles'
            color='currentColor'
            className='text-blue-600 dark:text-blue-500'
          />
        ) : selected.name === "ApeOnlyIsland" ? (
          <Apes />
        ) : (
          results.map((item) => (
            <ResultCard key={`${selected.name}-${item.mint}`} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default SniperTool;
