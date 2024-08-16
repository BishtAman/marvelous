import { PageHeading } from "../page-heading/page-heading.component";
import WHAT from "../../assets/heading/what.png";

export const Trending = () => {
  return (
    <main className=" relative">
      <div className=" z-10 absolute top-10  w-full">
        <PageHeading padd="-5rem" heading={WHAT} />
      </div>
      <div className="text-white flex justify-center z-0">
        <iframe
          className="h-[100vh] w-full "
          src="https://www.youtube.com/embed/uJMCNJP2ipI?autoplay=1&loop=1&playlist=uJMCNJP2ipI&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};
