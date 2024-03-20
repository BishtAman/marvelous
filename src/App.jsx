import { Fragment } from "react";
import { Home } from "./routes/home/home.component";
import { Hotlist } from "./routes/hotlist/hotlist.component";

export default function App() {
  return (
    <Fragment>
      <Home />
      <Hotlist/>
    </Fragment>
  );
}
