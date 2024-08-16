import MOVIES_DATA2 from "../../data/movie_data copy";
import { Fragment, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
export function SingleMovie({ movie }) {
  let character = MOVIES_DATA2.find((movies) => movies.movieName === movie);

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true); // Set imageLoaded to true when the image is loaded
  };
  return (
    <Fragment>

      <div className="movie-slab flex max-sm:flex-col mt-[20px]  text-white py-[40px] px-[60px] max-sm:px-[20px] space-x-[5px] max-sm:space-y-5 max-sm:space-x-[0px]">
        {!imageLoaded && <PulseLoader className="mt-[100px]" color="#ffffff" />}
        <img
          src={character.mainImage}
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoad}
          alt="character"
          className="h-[500px] max-sm:h-[400px]"
        />

        <iframe
          className="w-full h-[500px] max-sm:h-[250px]"
          src={character.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div>
        <section className="space-y-5 max-sm:mt-[20px] movie-slab2 py-10 px-32 max-sm:px-8 text-white">
          <h1 className="text-[70px] max-sm:text-[30px] font-extrabold ">
            {character.movieName}
          </h1>
          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Release Date :
            <span className="italic font-light"> {character.releaseDate}</span>
          </p>

          <p className="text-[18px] max-sm:text-[15px] font-light">
            {character.description}
          </p>
          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Director :
            <span className="italic font-light"> {character.director}</span>
          </p>
          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Main Characters :{" "}
            {character.mainCharacters.map((movies) => (
              <span className="italic font-light" key={movies}>
                {movies},{" "}
              </span>
            ))}
          </p>

          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Box Office Collection :
            <span className="italic font-light"> {character.boxOffice}</span>
          </p>
          <p className="font-semibold text-[18px] max-sm:text-[15px]">
            Overall Rating :
            <span className="italic font-light"> {character.imdbRating}</span>
          </p>
        </section>
      </div>
    </Fragment>
  );
}
