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
  const [loading, setLoading] = useState<boolean>(true);
  const [selected, setSelected] = useState(groups[0]);
  const [results, setResults] = useState(watchlist);
  const [upcoming, setUpcoming] = useState<Array<any>>([]);
  const directory =
    "https://ipfs.io/ipfs/QmSZqMMGcAosPVKRVTo6Jydo5ZwkXMDSvWmsKiJuWzXAQX";

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
        setResults(upcoming);
        break;
      default:
        setResults(watchlist);
    }
  }, [selected, upcoming]);

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
      let tempItems: Array<any> = [];
      const current = 4466;
      const target = current + 25;

      for (let i = current, j = target; i < j; i++) {
        await fetch(`${directory}/${i}.json`)
          .then((res) => res.json())
          .then((res) => {
            tempItems.push({
              mint: i,
              data: res,
              type: "upcoming",
              rank: "Rank",
            });

            // const type = res.attributes.find(
            //   (attr: any) => attr.trait_type === "Type"
            // )?.value;
          });
      }

      setUpcoming(tempItems);
    };
    getItems().then(() => setLoading(false));
  }, []);

  return (
    <div className='p-4 overflow-y-scroll h-full'>
      <div className='w-72 mb-4'>
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

      <h1 className='text-3xl mb-3'>{selected.name}</h1>
      <div className='grid grid-cols-5 gap-4'>
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
