import { Fragment } from "react";
import { Home } from "./routes/home/home.component";
import { Navigation } from "./components/navigation/navigation.component";
import {Test} from './components/test/test'
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Fragment>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/test" element={<Test />} />

        </Route>
      </Fragment>
    </Routes>
  );
}
