import Video from "../../../assets/video2.mp4";
import Video2 from "../../../assets/video.mp4";
import { Fragment } from "react";
export const BaseVideo = () => {
  return (
    <Fragment>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 h-[100vh] max-sm:hidden w-full z-[-99]"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 h-[100vh] sm:hidden w-full z-[-99]"
      >
        <source src={Video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Fragment>
  );
};
