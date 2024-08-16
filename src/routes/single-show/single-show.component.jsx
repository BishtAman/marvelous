import { Fragment, useState } from "react";
import TV_SHOWS from "../../data/show_data";
import PulseLoader from "react-spinners/PulseLoader";
export function SingleShow({ show }) {
  let tvShow = TV_SHOWS.find((shows) => shows.showName === show);

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true); // Set imageLoaded to true when the image is loaded
  };
  return (
    <Fragment>
      <div className="movie-slab flex max-sm:flex-col mt-[20px]  text-white py-[40px] px-[60px] max-sm:px-[20px] space-x-[5px] max-sm:space-y-5 max-sm:space-x-[0px]">
        {!imageLoaded && <PulseLoader className="mt-[100px]" color="#ffffff" />}
        <img
          src={tvShow.mainImage}
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoad}
          alt="tvShow"
          className="h-[500px] max-sm:h-[400px]"
        />

        <iframe
          className="w-full h-[500px] max-sm:h-[250px]"
          src={tvShow.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div>
        <section className="space-y-5 max-sm:mt-[20px] movie-slab2 py-10 px-32 max-sm:px-8 text-white">
          <h1 className="text-[70px] max-sm:text-[30px] font-extrabold ">
            {tvShow.showName}
          </h1>
          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Release Date :
            <span className="italic font-light"> {tvShow.releaseDate}</span>
          </p>
          <p className="text-[18px] max-sm:text-[15px] font-light">
            {tvShow.description}
          </p>
          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Total Seasons :
            <span className="italic font-light"> {tvShow.seasons}</span>
          </p>
          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Creators :
            <span className="italic font-light"> {tvShow.creators}</span>
          </p>
          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Main Characters :{" "}
            {tvShow.mainCharacters.map((movies) => (
              <span className="italic font-light" key={movies}>
                {movies},{" "}
              </span>
            ))}
          </p>

          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Overall Rating :
            <span className="italic font-light"> {tvShow.imdbRating}</span>
          </p>
        </section>
      </div>
    </Fragment>
  );
}
