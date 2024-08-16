// import Video from "../../../assets/video2.mp4";
// import Video2 from "../../../assets/video.mp4";
import { Fragment } from "react";
export const BaseVideo = () => {
  return (
    <Fragment>
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 h-[100vh] max-sm:hidden w-full z-[-99]"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <iframe
        className="absolute top-0 h-[100vh] sm:hidden w-full z-[-99]"
        src="https://www.youtube.com/embed/Lgj7_r6-FhU?autoplay=1&loop=1&playlist=Lgj7_r6-FhU&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0&mute=1&vq=hd1080"
        title="YouTube Shorts video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <iframe
        className="absolute top-0 h-[100vh] max-sm:hidden w-full z-[-99]"
        src="https://www.youtube.com/embed/wy4fDL4DVKk?autoplay=1&loop=1&playlist=wy4fDL4DVKk&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0&mute=1&vq=hd1080"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Fragment>
  );
};
