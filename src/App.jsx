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
            path={`/home/characters/${"Kang The Conqueror".toLowerCase()}`}
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
            path={`/home/characters/${"Reed Richards".toLowerCase()}`}
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
            path={`/home/characters/${"Moon Knight".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Knight"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Kingpin".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Kingpin"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Daredevil".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Daredevil"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Venom".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Venom"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Green Goblin".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Goblin"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Mighty Thor".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Thor2"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Gorr the God Butcher".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Butcher"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Charles Xavier".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Xavier"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Black Bolt".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Bolt"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Hawkeye".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Hawkeye"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"War Machine".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Machine"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Vision".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Vision"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Sam Wilson".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Wilson"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Shang Chi".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Chi"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Arnim Zola".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Zola"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Winter Soldier".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Soldier"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Ant-Man".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Man"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Ego".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Ego"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Peter Quill".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Quill"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Gamora".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Gamora"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Rocket".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Rocket"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Nick Fury".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Fury"
                )}
              />
              
            }
          />


          <Route
            path={`/home/characters/${"Nebula".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Nebula"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Mantis".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Mantis"
                )}
              />
            }
          />

          <Route
            path={`/home/characters/${"Drax".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Drax"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Groot".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Groot"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Giah".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Giah"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Auroboros".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Auroboros"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Gravik".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Gravik"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Miss Minutes".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Minutes"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Sylvie".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Sylvie"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Ms Marvel 2".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "2"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"She Hulk".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Hulk2"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"King Valkyrie".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Valkyrie"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Mysterio".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Mysterio"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Sersi".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Sersi"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Ikaris".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Ikaris"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Thena".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "hena"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Kingo".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Kingo"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Makkari".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Makkari"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Ancient One".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "One"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Ronan".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Ronan"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Jarvis".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Jarvis"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Hela".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Hela"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Hope".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Hope"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Janet".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Janet"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Hank Pym".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Pym"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Abomination".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Abomination"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Ivan Vanko".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Vanko"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Yondu".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Yondu"
                )}
              />
            }
          /> 






          <Route
            path={`/home/characters/${"Cassandra".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Cassandra"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Heimdall".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Heimdall"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Phil Coulson".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Coulson"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Red Skull".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Skull"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Xu Wenwu".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Wenwu"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Yelena Belova".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Belova"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Crossbones".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Crossbones"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Kaecilius".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Kaecilius"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"America Chavez".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Chavez"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Quicksilver".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Quicksilver"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Namor".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Namor"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Medusa".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Medusa"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Peggy Carter".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Carter"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Maria Hill".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Hill"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Shuri".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Shuri"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Wong".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Wong"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Killmonger".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Killmonger"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Cable".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Cable"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Punisher".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Punisher"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Mobius".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Mobius"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Okoye".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Okoye"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Collector".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Collector"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Eitri Dwarf".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Dwarf"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"M Baku".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Baku"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"High Evolutionary".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Evolutionary"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Adam Warlock".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Warlock"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Khonshu".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Khonshu"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Korg".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Korg"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Executioner".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Executioner"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Dr. Erik Selvig".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Selvig"
                )}
              />
            }
          />
          {/* <Route
            path={`/home/characters/${"Selvig".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "watcher"
                )}
              />
            }
          /> */}
          <Route
            path={`/home/characters/${"Ava Starr".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Starr"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Alexander Pierce".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Pierce"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"Iron Monger".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "Monger"
                )}
              />
            }
          />
          {/* <Route
            path={`/home/characters/${"".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "watcher"
                )}
              />
            }
          />
          <Route
            path={`/home/characters/${"".toLowerCase()}`}
            element={
              <SingleCharacter
                character={loadedCharacter.find(
                  (char) => char.imageName === "watcher"
                )}
              />
            }
          /> */}

          <Route path="/home/characters/hulk" element={<Test />} />
          <Route path="/home/characters/thor" element={<Test />} />
          <Route path="/home/characters" element={<Characters />} />
        </Route>
      </Fragment>
    </Routes>
  );
}
