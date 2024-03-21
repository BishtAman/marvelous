import { PageHeading } from "../../components/page-heading/page-heading.component";
import MCU from "../../assets/heading/characteres.png";
import { TeirS } from "../../components/teir-s/teir-s.component";

export const Characters = () => {


  return (
    <div className="text-black">
      <div className="mt-10">
      <PageHeading heading={MCU} />
      </div>
      <TeirS />
    </div>
  );
};
