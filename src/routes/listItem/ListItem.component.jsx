import { useState, useEffect } from "react";

import { HotListItem } from "../../components/hotlist-item/hotlist-item.component";
import { PageHeading } from "../../components/page-heading/page-heading.component";
import HOT_LIST_ITEMS from "../../data/hotlist-items";
import FEAT from '../../assets/heading/feat.png'

export const ListItem = () => {
  const [loadedHotlist, setloadedHotlist] = useState([]);

  useEffect(() => {
    const fetchHotlists = async () => {
      const loadedHotlist = await Promise.all(
        HOT_LIST_ITEMS.map(async (Hotlist) => {
          const imageModule = await Hotlist.img;
          return { ...Hotlist, img: imageModule.default };
        })
      );
      setloadedHotlist(loadedHotlist);
    };

    fetchHotlists();
  }, []);

  return (
    <main className="h-[100%] bg-black pt-[50px] mt-20">
      <PageHeading heading = {FEAT} padd="-5rem"/>
      <section className="flex flex-wrap justify-around">
        {loadedHotlist.map(({ name, img, className, description }) => (
          <HotListItem
            key={name}
            name={name}
            img={img}
            
            description={description}
            className={className}
          />
        ))}
      </section>
    </main>
  );
};
