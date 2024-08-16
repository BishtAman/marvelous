import { BaseText } from "./base-elements/base-text.component";
import { BaseVideo } from "./base-elements/base-video.component";
export const Base = () => {
  return (
    <div className="">
      <main className=" flex  ">
        <BaseVideo/>
        <BaseText/>
      </main>
    </div>
  );
};
