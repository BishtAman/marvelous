import CHARACTERS_DETAILS_2 from "../../data/character-data copy";
import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
export function SingleCharacter({ char }) {
  let character = CHARACTERS_DETAILS_2.find(
    (characters) => characters.name === char
  );

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true); // Set imageLoaded to true when the image is loaded
  };
  return (
    <div className="flex max-sm:flex-col mt-[20px] bg-red-600 text-white py-[40px] px-[60px] space-x-[50px] max-sm:space-x-[0px]">
      {!imageLoaded && <PulseLoader className="mt-[100px]" color="#ffffff" />}
      <img
        src={character.imageURL}
        style={{ display: imageLoaded ? "block" : "none" }}
        onLoad={handleImageLoad}
        alt="character"
        className="h-[450px]"
      />

      <section className="space-y-5 max-sm:mt-[20px]">
        <h1 className="text-[70px] max-sm:text-[30px] font-extrabold ">{character.name}</h1>
        {character.alias.map((alias, index) => (
          <span className="italic font-extralight" key={index}>
            {alias},{" "}
          </span>
        ))}
        <p className="text-[18px] max-sm:text-[15px] font-light">{character.about}</p>
        <p className="font-semibold text-[18px] max-sm:text-[15px]">
          First Appearance in :
          <span className="italic font-light">
            {" "}
            {character.firstAppearance}
          </span>
        </p>
        <p className="font-semibold text-[18px] max-sm:text-[15px]">
          Appeared in :{" "}
          {character.movies.map((movies) => (
            <span className="italic font-light" key={movies}>
              {movies},{" "}
            </span>
          ))}
        </p>
        <p className="font-semibold text-[18px] max-sm:text-[15px]">
          Powers :{" "}
          {character.powers.map((powers) => (
            <span className="italic font-light" key={powers}>
              {powers},{" "}
            </span>
          ))}
        </p>
        <p className="font-semibold text-[18px] max-sm:text-[15px]">
          Creators :
          <span className="italic font-light"> {character.creator}</span>
        </p>
      </section>
    </div>
  );
}
