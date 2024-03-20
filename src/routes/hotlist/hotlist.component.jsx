import { HotListItem } from "../../components/hotlist-item/hotlist-item.component";
import { useState, useEffect } from "react";
import HOT_LIST_ITEMS from "../../data/hotlist-items";
import LOGO from "../../assets/fav.png";
export const Hotlist = () => {
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
    <main className="h-[100vh] bg-black pt-[50px]">
      <h1 className="flex justify-center items-center space-x-5">
        <img src={LOGO} alt="kid-dp" className="h-[40px]" />
        <span className="text-white text-[50px] uppercase font-extrabold">
          <mark>Top Prime Picks</mark>
        </span>
        <img src={LOGO} alt="kid-dp" className="h-[40px]" />
      </h1>

      <section className="flex">
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
