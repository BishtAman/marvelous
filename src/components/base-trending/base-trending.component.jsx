import { PageHeading } from "../page-heading/page-heading.component";
import WHAT from '../../assets/heading/what.png'

export const Trending = () => {
  return (
    <main className="space-y-10">
    <PageHeading heading={WHAT}/>
        <div className="text-white flex justify-center">
      <iframe
        className="w-[70%] h-[70vh]"
        src="https://www.youtube.com/embed/uJMCNJP2ipI?si=Te7NxrI751Y_p5hv"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    </main>
  );
};
