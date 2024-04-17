import {  useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { Navigation } from "./components/navigation/navigation.component";
import { Characters } from "./routes/characters/characters.component";
import { SingleCharacter } from "./routes/single-character/single-character.component";
import CHARACTERS_DETAILS from "./data/character-data";

export default function App() {
  const [loadedCharacter, setLoadedCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const loadedCharacterData = await Promise.all(
          CHARACTERS_DETAILS.map(async (character) => {
            const imageModule = await import(`./assets/${character.imageName}`);
            return { ...character, imageURL: imageModule.default };
          })
        );
        setLoadedCharacter(loadedCharacterData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

        {loadedCharacter.map((character) => (
          <Route
            key={character.imageName}
            path={`/home/characters/${character.imageName.toLowerCase()}`}
            element={<SingleCharacter character={character} />}
          />
        ))}

        <Route path="/home/characters" element={<Characters />} />
      </Route>
    </Routes>
  );
}
