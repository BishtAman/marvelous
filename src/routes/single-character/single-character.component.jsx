import { useParams } from "react-router-dom";

export function SingleCharacter({ loadedCharacter }) {
  const { name } = useParams(); // Access the 'name' parameter from the URL
  const character = loadedCharacter.find(
    (char) => char.imageName.toLowerCase() === name.toLowerCase()
  );

  // Handle case where character is not found
  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="flex mt-[20px] bg-red-600 text-white py-[40px] px-[60px] space-x-[50px]">
      <img src={character.imageURL} alt="character" className="h-[450px]" />
      <section className="space-y-5">
        <h1 className="text-[70px] font-extrabold ">{character.name}</h1>
        {character.alias.map((alias, index) => (
          <span className="italic font-extralight" key={index}>
            {alias},{" "}
          </span>
        ))}
        <p className="text-[18px] font-light">{character.about}</p>
        <p className="font-semibold text-[18px]">
          First Appearance in :
          <span className="italic font-light">
            {" "}
            {character.firstAppearance}
          </span>
        </p>
        <p className="font-semibold text-[18px]">
          Appeared in :{" "}
          {character.movies.map((movies) => (
            <span className="italic font-light" key={movies}>
              {movies},{" "}
            </span>
          ))}
        </p>
        <p className="font-semibold text-[18px]">
          Powers :{" "}
          {character.powers.map((powers) => (
            <span className="italic font-light" key={powers}>
              {powers},{" "}
            </span>
          ))}
        </p>
        <p className="font-semibold text-[18px]">
          Creators :
          <span className="italic font-light"> {character.creator}</span>
        </p>
      </section>
    </div>
  );
}
