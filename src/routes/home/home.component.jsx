import { Base } from "../../components/base/base.component";
import { Navigation } from "../../components/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import { Test } from "../../components/test/test";
export const Home = () => {
  return (
    <div className="h-[100vh]">
      <Routes>
      <Navigation />
      <Base />

        <Route path="/shop/*" element={<Test />} />
      </Routes>
    </div>
  );
};
