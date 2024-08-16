import { Trending } from "../../components/base-trending/base-trending.component";
import { Base } from "../../components/base/base.component";

import { ListItem } from "../listItem/ListItem.component";

export const Home = () => {
  return (
    <main>
      <Base />
      <Trending/>
      <ListItem />
    </main>
  );
};
