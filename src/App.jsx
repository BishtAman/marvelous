import { Fragment, useState, useEffect } from "react";
import { Home } from "./routes/home/home.component";
import { Navigation } from "./components/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import { Characters } from "./routes/characters/characters.component";
import { SingleCharacter } from "./routes/single-character/single-character.component";
import CHARACTERS_DETAILS from "./data/character-data";
import { Test } from "./components/test/test";

export default function App() {
  const [loadedCharacter, setLoadedCharacter] = useState([]);

  // App.js
  try {
    useEffect(() => {
      const fetchCharacters = async () => {
        const loadedCharacterData = await Promise.all(
          CHARACTERS_DETAILS.map(async (character) => {
            // Import the image based on the provided path
            const imageModule = await character.imageURL;
            return { ...character, imageURL: imageModule.default };
          })
        );
        setLoadedCharacter(loadedCharacterData);
      };
  
      fetchCharacters();
    }, [loadedCharacter]);
  } catch (error) {
    console.log("this is error: " + error);
  }

  return (
    <Routes>
      <Fragment>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />

          <Route
            path={`/home/characters/${"Deadpool".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Deadpool"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Iron Man".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "iron"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"hulk".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "hulk"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"thor".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "thor"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Loki".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "loki"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Captain America".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "america"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Wanda".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "wanda"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Black Widow".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "widow"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Thanos".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "thanos"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Dr. Strange".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "strange"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Black Panther".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "black"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Captain Marvel".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "captain"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Kang The Conqurer".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "kang"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Wolverine".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "wolv"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Dormammu".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "dormamu"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/reed richards}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "reed"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Dr. Doom".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "doom"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Spider Man".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "spider"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Eternity".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "eternity"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"The Watcher".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "watcher"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Prime Ultron".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "ultron"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"He Who Remains".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "he"
                )}
              />
            }
          />

          <Route path="/home/characters/hulk" element={<Test />} />
          <Route path="/home/characters/thor" element={<Test />} />
          <Route path="/home/characters" element={<Characters />} />
        </Route>
      </Fragment>
    </Routes>
  );
}
