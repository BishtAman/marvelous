import { Fragment } from "react";
import { Home } from "./routes/home/home.component";
import { Navigation } from "./components/navigation/navigation.component";
import {Test} from './components/test/test'
import { Routes, Route } from "react-router-dom";
import { Characters } from "./routes/characters/characters.component";
export default function App() {
  return (
    <Routes>
      <Fragment>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/home/characters/deadpool" element={<Test />} />
          <Route path="/home/characters/hulk" element={<Test />} />
          <Route path="/home/characters/thor" element={<Test />} />
          <Route path="/home/characters" element={<Characters />} />
        </Route>
      </Fragment>
    </Routes>
  );
}
