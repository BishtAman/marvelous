import { useState, useEffect } from "react";
import { PageHeading } from "../page-heading/page-heading.component";
import CHARACTERS from "../../data/character-data.js";
import { CharacterCard } from "../character-card/character-card.component";

import S from "../../assets/teirs/s.png";
import A from "../../assets/teirs/a.png";
import B from "../../assets/teirs/b.png";
import C from "../../assets/teirs/C.png";
import D from "../../assets/teirs/d.png";


export const TeirS = () => {
  const [currentTeir, setCurrentTeir] = useState('S Tier')

  const [loadedCharacters, setLoadedCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacterImages = async () => {
      const sTierCharacters = CHARACTERS.find(
        (tier) => tier.title === currentTeir
      );
      if (sTierCharacters) {
        const loadedChars = sTierCharacters.characters.map(async (char) => {
          const imageModule = await char.imageURL;
          return { ...char, imageURL: imageModule.default };
        });

        Promise.all(loadedChars).then((characters) => {
          setLoadedCharacters(characters);
        });
      }
    };

    fetchCharacterImages();
  }, [currentTeir]);
  return (
    <div>
      <section className="flex justify-center items-center bg-[#87b3a6d9] mb-[60px] mt-[20px] h-[80px]">
        <button className="steir teirs" onClick={() => setCurrentTeir("S Tier")}>
          <PageHeading heading={S} className="justify-start " />
        </button>
        <button className="ateir teirs" onClick={() => setCurrentTeir("A Tier")}>
          <PageHeading heading={A} className="justify-start " />
        </button>
        <button className="bteir teirs" onClick={() => setCurrentTeir("B Tier")}>
          <PageHeading heading={B} className="justify-start " />
        </button>
        <button className="cteir teirs" onClick={() => setCurrentTeir("C Tier")}>
          <PageHeading heading={C} className="justify-start " />
        </button>
        <button className="dteir teirs" onClick={() => setCurrentTeir("D Tier")}>
          <PageHeading heading={D} className="justify-start " />
        </button>
      </section>
      <div className="flex flex-wrap  justify-evenly ">
        {loadedCharacters.map(({ id, name, imageURL }) => (
          <CharacterCard
            key={id}
            name={name}
            imageURL={imageURL}
          />
        ))}
      </div>
    </div>
  );
};
