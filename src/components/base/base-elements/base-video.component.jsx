import Video from "../../../assets/video2.mp4";
export const BaseVideo = () => {
  return (
    <video
          autoPlay
          loop
          muted
          className="absolute top-0 h-[100vh] w-full z-[-99]"
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  );
};
