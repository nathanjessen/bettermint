// import { useState, useEffect } from "react";

export const Apes = () => {
  // const [items, setItems] = useState<Array<any>>([]);
  // const [loading, setLoading] = useState<boolean>(false);
  // const api = "https://metadata.apeonlyisland.com";

  // Angelic: 1
  // Cyborg: 1
  // DMT: 428
  // Dark Blue: 917
  // Diamond: 438
  // Dragon Scales: 1
  // Fur of Darkness: 1
  // Fur of Light: 1
  // Gold: 427
  // Gray: 2334
  // LSD: 11
  // Lava: 408
  // Lightning: 24
  // Liquid Gold: 1
  // Orange: 439
  // Peach: 271
  // Pink: 764
  // Radioactive: 1
  // Red: 524
  // Teal: 549
  // Vamp: 1
  // White: 1330
  // Zombie: 15
  // undefined: 1

  // useEffect(() => {
  //   const getItems = async () => {
  //     setLoading(true);
  //     let tempItems: Array<any> = [];

  //     //   i = 7772, Rank 1
  //     // tested to 5k for appearance
  //     for (let i = 0, j = i + 8888; i < j; i++) {
  //       // `${metadata}/${i}.json`
  //       fetch(`${api}/${i}?c=0`)
  //         .then((res) => res.json())
  //         .then((res) => {
  //           tempItems.push({
  //             mint: i,
  //             data: res,
  //             type: "upcoming",
  //             fur: res.attributes.find((attr: any) => attr.trait_type === "Fur")
  //               ?.value,
  //           });
  //         });
  //     }
  //     setItems(tempItems);

  //     let traits = tempItems.map((item) => item.fur);
  //     var map = traits.reduce(function (prev, cur) {
  //       prev[cur] = (prev[cur] || 0) + 1;
  //       return prev;
  //     }, {});
  //     console.log(map);
  //   };
  //   getItems().then(() => setLoading(false));
  // }, []);

  // Search for items
  // useEffect(() => {
  //   const getItems = async () => {
  //     let tempItems: Array<any> = [];
  //     const searchItems: Array<any> = ["White", "Green"];
  //     for (let i = 0; i < 8888; i++) {
  //       await fetch(`${api}/${i}?c=0`)
  //         .then((res) => res.json())
  //         .then((res) => {
  //           for (let j = 0; j < searchItems.length; j++) {
  //             let fur = res.attributes.find((attr: any) => attr.trait_type === "Fur")
  //             ?.value
  //             if (fur.includes(searchItems[j])) {
  //               tempItems.push({
  //                 mint: i,
  //                 data: res,
  //                 type: "upcoming",
  //                 fur: res.attributes.find((attr: any) => attr.trait_type === "Fur")?.value,
  //               });
  //             }
  //           }
  //         });
  //     }
  //     setItems(tempItems);
  //   };
  //   getItems().then(() => setLoading(false));
  // }, []);

  const images =
    "https://gateway.pinata.cloud/ipfs/QmddKi5xJBtYMcoPhBz9HMZaj1ZW7sjdzdZsxLajumWWcE";
  const metadata =
    "https://ipfs.io/ipfs/QmSZqMMGcAosPVKRVTo6Jydo5ZwkXMDSvWmsKiJuWzXAQX";
  const items = [
    {
      mint: 135,
      data: { name: "Ape Only #135" },
      type: "ApeOnly",
      rank: "View",
      image: "964",
      sold: true,
    },
    {
      mint: 2474,
      data: { name: "Ape Only #2474" },
      type: "ApeOnly",
      rank: "View",
      image: "1423",
      sold: true,
    },
    {
      mint: 4173,
      data: { name: "Ape Only #4173" },
      type: "ApeOnly",
      rank: "View",
      image: "1301",
      sold: false,
    },
    {
      mint: 5874,
      data: { name: "Ape Only #5874" },
      type: "ApeOnly",
      rank: "View",
      image: "5398",
      sold: false,
    },
    {
      mint: 7129,
      data: { name: "Ape Only #7129" },
      type: "ApeOnly",
      rank: "View",
      image: "1411",
      sold: false,
    },
    {
      mint: 8005,
      data: { name: "Ape Only #8005" },
      type: "ApeOnly",
      rank: "View",
      image: "268",
      sold: false,
    },
    {
      mint: 8034,
      data: { name: "Ape Only #8034" },
      type: "ApeOnly",
      rank: "View",
      image: "3799",
      sold: false,
    },
  ];

  return (
    <>
      {items.map((item) => (
        <div
          key={item.mint}
          className={`flex flex-col rounded-md shadow overflow-hidden ${
            item.sold && "hidden"
          }`}>
          <div className='flex-shrink-0'>
            <a
              href={`${images}/${item.image}.png`}
              target='_blank'
              rel='noreferrer'>
              <img src={`${images}/${item.image}.png`} alt='' />
            </a>
          </div>
          <div className='flex-1 bg-white dark:bg-gray-800 p-4 flex flex-col justify-between'>
            <div className='flex-1'>
              <p className='text-base font-semibold text-gray-900 dark:text-gray-100'>
                <a
                  className='text-blue-600 hover:text-blue-900'
                  href={`${metadata}/${item.mint}.json`}
                  target='_blank'
                  rel='noreferrer'>
                  {item.mint}
                </a>
              </p>
              <p className='mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-3'>
                {item.data.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
