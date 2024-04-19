import { useState, useEffect } from "react";
import { PageHeading } from "../page-heading/page-heading.component";
import CHARACTERS_DETAILS from "../../data/character-data"; // Assuming CHARACTERS_DETAILS is exported properly
import { CharacterCard } from "../character-card/character-card.component";

import S from "../../assets/teirs/s.png";
import A from "../../assets/teirs/a.png";
import B from "../../assets/teirs/b.png";
import C from "../../assets/teirs/C.png";
import D from "../../assets/teirs/d.png";

export const TeirS = () => {
  const [currentTier, setCurrentTier] = useState("S Tier");
  const [loadedCharacters, setLoadedCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacterImages = async () => {
      const tierDetails = CHARACTERS_DETAILS.find((tier) => tier.title === currentTier);
      if (tierDetails) {
        try {
          const loadedChars = await Promise.all(
            tierDetails.characters.map(async (char) => {
              if (!char.imageName) {
                throw new Error(`imageName not defined for character: ${char.name}`);
              }
  
              const imageModule = await import(`../../assets/characters/all/${char.imageName}.png`);
              return { ...char, imageURL: imageModule.default };
            })
          );
          setLoadedCharacters(loadedChars);
        } catch (error) {
          console.error("Error loading character images:", error);
        }
      }
    };
  
    fetchCharacterImages();
  }, [currentTier]);
  
  return (
    <div>
      <section className="flex  px-5 space-x-4 bg-[#87b3a6d9] mb-[60px] mt-[20px] h-[80px]">
        <button className=" teirs" onClick={() => setCurrentTier("S Tier")}>
          <PageHeading heading={S} padd='-5rem' className="w-full" />
        </button>
        <button className=" teirs" onClick={() => setCurrentTier("A Tier")}>
          <PageHeading heading={A} padd='-5rem' className="w-full" />
        </button>
        <button className=" teirs" onClick={() => setCurrentTier("B Tier")}>
          <PageHeading heading={B} padd='-5rem' className="w-full" />
        </button>
        <button className=" teirs" onClick={() => setCurrentTier("C Tier")}>
          <PageHeading heading={C} padd='-5rem' className="w-full" />
        </button>
        <button className=" teirs" onClick={() => setCurrentTier("D Tier")}>
          <PageHeading heading={D} padd='-5rem' className="w-full" />
        </button>
      </section>
      <div className="flex flex-wrap justify-evenly">
        {loadedCharacters.map(({ name, imageURL }) => (
          <CharacterCard key={name} name={name} imageURL={imageURL} />
        ))}
      </div>
    </div>
  );
};
