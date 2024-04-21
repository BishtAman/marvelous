// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { Navigation } from "./components/navigation/navigation.component";
import { Characters } from "./routes/characters/characters.component";
import { SingleCharacter } from "./routes/single-character/single-character.component";
import { Movies } from "./routes/movies/movies.component";
import { SingleMovie } from "./routes/single-movie/single-movie.component";

export default function App() {
  // const [loadedCharacter, setLoadedCharacter] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />


                {/* Characters */}

        <Route
          path={`/home/characters/${"Deadpool".toLowerCase()}`}
          element={<SingleCharacter char="Deadpool" />}
        />
        <Route
          path={`/home/characters/${"Iron Man".toLowerCase()}`}
          element={<SingleCharacter char="Iron Man" />}
        />
        <Route
          path={`/home/characters/${"Hulk".toLowerCase()}`}
          element={<SingleCharacter char="Hulk" />}
        />
        <Route
          path={`/home/characters/${"Thor".toLowerCase()}`}
          element={<SingleCharacter char="Thor" />}
        />
        <Route
          path={`/home/characters/${"Loki".toLowerCase()}`}
          element={<SingleCharacter char="Loki" />}
        />
        <Route
          path={`/home/characters/${"Captain America".toLowerCase()}`}
          element={<SingleCharacter char="Captain America" />}
        />
        <Route
          path={`/home/characters/${"Wanda Maximoff".toLowerCase()}`}
          element={<SingleCharacter char="Wanda Maximoff" />}
        />
        <Route
          path={`/home/characters/${"Black Widow".toLowerCase()}`}
          element={<SingleCharacter char="Black Widow" />}
        />
        <Route
          path={`/home/characters/${"Thanos".toLowerCase()}`}
          element={<SingleCharacter char="Thanos" />}
        />
        <Route
          path={`/home/characters/${"Doctor Strange".toLowerCase()}`}
          element={<SingleCharacter char="Doctor Strange" />}
        />
        <Route
          path={`/home/characters/${"Black Panther".toLowerCase()}`}
          element={<SingleCharacter char="Black Panther" />}
        />
        <Route
          path={`/home/characters/${"Captain Marvel".toLowerCase()}`}
          element={<SingleCharacter char="Captain Marvel" />}
        />
        <Route
          path={`/home/characters/${"Kang the Conqueror".toLowerCase()}`}
          element={<SingleCharacter char="Kang the Conqueror" />}
        />
        <Route
          path={`/home/characters/${"Wolverine".toLowerCase()}`}
          element={<SingleCharacter char="Wolverine" />}
        />
        <Route
          path={`/home/characters/${"Dormammu".toLowerCase()}`}
          element={<SingleCharacter char="Dormammu" />}
        />
        <Route
          path={`/home/characters/${"Reed Richards".toLowerCase()}`}
          element={<SingleCharacter char="Reed Richards" />}
        />
        <Route
          path={`/home/characters/${"Doctor Doom".toLowerCase()}`}
          element={<SingleCharacter char="Doctor Doom" />}
        />
        <Route
          path={`/home/characters/${"Spider-Man".toLowerCase()}`}
          element={<SingleCharacter char="Spider-Man" />}
        />
        <Route
          path={`/home/characters/${"Eternity".toLowerCase()}`}
          element={<SingleCharacter char="Eternity" />}
        />
        <Route
          path={`/home/characters/${"The Watcher".toLowerCase()}`}
          element={<SingleCharacter char="The Watcher" />}
        />
        <Route
          path={`/home/characters/${"Moon Knight".toLowerCase()}`}
          element={<SingleCharacter char="Moon Knight" />}
        />
        <Route
          path={`/home/characters/${"Kingpin".toLowerCase()}`}
          element={<SingleCharacter char="Kingpin" />}
        />
        <Route
          path={`/home/characters/${"Daredevil".toLowerCase()}`}
          element={<SingleCharacter char="Daredevil" />}
        />
        <Route
          path={`/home/characters/${"Venom".toLowerCase()}`}
          element={<SingleCharacter char="Venom" />}
        />
        <Route
          path={`/home/characters/${"Green Goblin".toLowerCase()}`}
          element={<SingleCharacter char="Green Goblin" />}
        />
        <Route
          path={`/home/characters/${"Mighty Thor".toLowerCase()}`}
          element={<SingleCharacter char="Mighty Thor" />}
        />
        <Route
          path={`/home/characters/${"Gorr the God Butcher".toLowerCase()}`}
          element={<SingleCharacter char="Gorr the God Butcher" />}
        />
        <Route
          path={`/home/characters/${"Charles Xavier".toLowerCase()}`}
          element={<SingleCharacter char="Charles Xavier" />}
        />
        <Route
          path={`/home/characters/${"Black Bolt".toLowerCase()}`}
          element={<SingleCharacter char="Black Bolt" />}
        />
        <Route
          path={`/home/characters/${"Hawkeye".toLowerCase()}`}
          element={<SingleCharacter char="Hawkeye" />}
        />
        <Route
          path={`/home/characters/${"War Machine".toLowerCase()}`}
          element={<SingleCharacter char="War Machine" />}
        />
        <Route
          path={`/home/characters/${"Vision".toLowerCase()}`}
          element={<SingleCharacter char="Vision" />}
        />
        <Route
          path={`/home/characters/${"Sam Wilson".toLowerCase()}`}
          element={<SingleCharacter char="Sam Wilson" />}
        />
        <Route
          path={`/home/characters/${"Shang-Chi".toLowerCase()}`}
          element={<SingleCharacter char="Shang-Chi" />}
        />
        <Route
          path={`/home/characters/${"Arnim Zola".toLowerCase()}`}
          element={<SingleCharacter char="Arnim Zola" />}
        />
        <Route
          path={`/home/characters/${"Winter Soldier".toLowerCase()}`}
          element={<SingleCharacter char="Winter Soldier" />}
        />
        <Route
          path={`/home/characters/${"Ant-Man".toLowerCase()}`}
          element={<SingleCharacter char="Ant-Man" />}
        />
        <Route
          path={`/home/characters/${"Ego".toLowerCase()}`}
          element={<SingleCharacter char="Ego" />}
        />
        <Route
          path={`/home/characters/${"Peter Quill".toLowerCase()}`}
          element={<SingleCharacter char="Peter Quill" />}
        />
        <Route
          path={`/home/characters/${"Gamora".toLowerCase()}`}
          element={<SingleCharacter char="Gamora" />}
        />
        <Route
          path={`/home/characters/${"Rocket".toLowerCase()}`}
          element={<SingleCharacter char="Rocket" />}
        />
        <Route
          path={`/home/characters/${"Nick Fury".toLowerCase()}`}
          element={<SingleCharacter char="Nick Fury" />}
        />
        <Route
          path={`/home/characters/${"Nebula".toLowerCase()}`}
          element={<SingleCharacter char="Nebula" />}
        />
        <Route
          path={`/home/characters/${"Mantis".toLowerCase()}`}
          element={<SingleCharacter char="Mantis" />}
        />
        <Route
          path={`/home/characters/${"Drax".toLowerCase()}`}
          element={<SingleCharacter char="Drax" />}
        />
        <Route
          path={`/home/characters/${"Groot".toLowerCase()}`}
          element={<SingleCharacter char="Groot" />}
        />
        <Route
          path={`/home/characters/${"Giah".toLowerCase()}`}
          element={<SingleCharacter char="Giah" />}
        />
        <Route
          path={`/home/characters/${"Gravik".toLowerCase()}`}
          element={<SingleCharacter char="Gravik" />}
        />
        <Route
          path={`/home/characters/${"Auroboros".toLowerCase()}`}
          element={<SingleCharacter char="Auroboros" />}
        />
        <Route
          path={`/home/characters/${"Miss Minutes".toLowerCase()}`}
          element={<SingleCharacter char="Miss Minutes" />}
        />
        <Route
          path={`/home/characters/${"Sylvie".toLowerCase()}`}
          element={<SingleCharacter char="Sylvie" />}
        />
        <Route
          path={`/home/characters/${"Ms. Marvel".toLowerCase()}`}
          element={<SingleCharacter char="Ms. Marvel" />}
        />
        <Route
          path={`/home/characters/${"She-Hulk".toLowerCase()}`}
          element={<SingleCharacter char="She-Hulk" />}
        />
        <Route
          path={`/home/characters/${"King Valkyrie".toLowerCase()}`}
          element={<SingleCharacter char="King Valkyrie" />}
        />
        <Route
          path={`/home/characters/${"Mysterio".toLowerCase()}`}
          element={<SingleCharacter char="Mysterio" />}
        />
        <Route
          path={`/home/characters/${"Sersi".toLowerCase()}`}
          element={<SingleCharacter char="Sersi" />}
        />
        <Route
          path={`/home/characters/${"Ikaris".toLowerCase()}`}
          element={<SingleCharacter char="Ikaris" />}
        />
        <Route
          path={`/home/characters/${"Thena".toLowerCase()}`}
          element={<SingleCharacter char="Thena" />}
        />
        <Route
          path={`/home/characters/${"Kingo".toLowerCase()}`}
          element={<SingleCharacter char="Kingo" />}
        />
        <Route
          path={`/home/characters/${"Makkari".toLowerCase()}`}
          element={<SingleCharacter char="Makkari" />}
        />
        <Route
          path={`/home/characters/${"Ancient One".toLowerCase()}`}
          element={<SingleCharacter char="Ancient One" />}
        />
        <Route
          path={`/home/characters/${"Ronan".toLowerCase()}`}
          element={<SingleCharacter char="Ronan" />}
        />
        <Route
          path={`/home/characters/${"J.A.R.V.I.S.".toLowerCase()}`}
          element={<SingleCharacter char="J.A.R.V.I.S." />}
        />
        <Route
          path={`/home/characters/${"Hela".toLowerCase()}`}
          element={<SingleCharacter char="Hela" />}
        />
        <Route
          path={`/home/characters/${"Hope van Dyne".toLowerCase()}`}
          element={<SingleCharacter char="Hope van Dyne" />}
        />
        <Route
          path={`/home/characters/${"Janet van Dyne".toLowerCase()}`}
          element={<SingleCharacter char="Janet van Dyne" />}
        />
        <Route
          path={`/home/characters/${"Hank Pym".toLowerCase()}`}
          element={<SingleCharacter char="Hank Pym" />}
        />
        <Route
          path={`/home/characters/${"Abomination".toLowerCase()}`}
          element={<SingleCharacter char="Abomination" />}
        />
        <Route
          path={`/home/characters/${"Ivan Vanko".toLowerCase()}`}
          element={<SingleCharacter char="Ivan Vanko" />}
        />
        <Route
          path={`/home/characters/${"Yondu Udonta".toLowerCase()}`}
          element={<SingleCharacter char="Yondu Udonta" />}
        />
        <Route
          path={`/home/characters/${"Cassandra Lang".toLowerCase()}`}
          element={<SingleCharacter char="Cassandra Lang" />}
        />
        <Route
          path={`/home/characters/${"Heimdall".toLowerCase()}`}
          element={<SingleCharacter char="Heimdall" />}
        />
        <Route
          path={`/home/characters/${"Phil Coulson".toLowerCase()}`}
          element={<SingleCharacter char="Phil Coulson" />}
        />
        <Route
          path={`/home/characters/${"Red Skull".toLowerCase()}`}
          element={<SingleCharacter char="Red Skull" />}
        />
        <Route
          path={`/home/characters/${"Xu Wenwu".toLowerCase()}`}
          element={<SingleCharacter char="Xu Wenwu" />}
        />
        <Route
          path={`/home/characters/${"Yelena Belova".toLowerCase()}`}
          element={<SingleCharacter char="Yelena Belova" />}
        />
        <Route
          path={`/home/characters/${"Crossbones".toLowerCase()}`}
          element={<SingleCharacter char="Crossbones" />}
        />
        <Route
          path={`/home/characters/${"Kaecilius".toLowerCase()}`}
          element={<SingleCharacter char="Kaecilius" />}
        />
        <Route
          path={`/home/characters/${"America Chavez".toLowerCase()}`}
          element={<SingleCharacter char="America Chavez" />}
        />
        <Route
          path={`/home/characters/${"Quicksilver".toLowerCase()}`}
          element={<SingleCharacter char="Quicksilver" />}
        />
        <Route
          path={`/home/characters/${"Namor".toLowerCase()}`}
          element={<SingleCharacter char="Namor" />}
        />
        <Route
          path={`/home/characters/${"Medusa".toLowerCase()}`}
          element={<SingleCharacter char="Medusa" />}
        />
        <Route
          path={`/home/characters/${"Peggy Carter".toLowerCase()}`}
          element={<SingleCharacter char="Peggy Carter" />}
        />
        <Route
          path={`/home/characters/${"Shuri".toLowerCase()}`}
          element={<SingleCharacter char="Shuri" />}
        />
        <Route
          path={`/home/characters/${"Maria Hill".toLowerCase()}`}
          element={<SingleCharacter char="Maria Hill" />}
        />
        <Route
          path={`/home/characters/${"Wong".toLowerCase()}`}
          element={<SingleCharacter char="Wong" />}
        />
        <Route
          path={`/home/characters/${"Killmonger".toLowerCase()}`}
          element={<SingleCharacter char="Killmonger" />}
        />
        <Route
          path={`/home/characters/${"Cable".toLowerCase()}`}
          element={<SingleCharacter char="Cable" />}
        />
        <Route
          path={`/home/characters/${"Punisher".toLowerCase()}`}
          element={<SingleCharacter char="Punisher" />}
        />
        <Route
          path={`/home/characters/${"Mobius M. Mobius".toLowerCase()}`}
          element={<SingleCharacter char="Mobius M. Mobius" />}
        />
        <Route
          path={`/home/characters/${"Okoye".toLowerCase()}`}
          element={<SingleCharacter char="Okoye" />}
        />
        <Route
          path={`/home/characters/${"Collector".toLowerCase()}`}
          element={<SingleCharacter char="Collector" />}
        />
        <Route
          path={`/home/characters/${"Eitri".toLowerCase()}`}
          element={<SingleCharacter char="Eitri" />}
        />
        <Route
          path={`/home/characters/${"M'Baku".toLowerCase()}`}
          element={<SingleCharacter char="M'Baku" />}
        />
        <Route
          path={`/home/characters/${"High Evolutionary".toLowerCase()}`}
          element={<SingleCharacter char="High Evolutionary" />}
        />
        <Route
          path={`/home/characters/${"Adam Warlock".toLowerCase()}`}
          element={<SingleCharacter char="Adam Warlock" />}
        />
        <Route
          path={`/home/characters/${"Khonshu".toLowerCase()}`}
          element={<SingleCharacter char="Khonshu" />}
        />
        <Route
          path={`/home/characters/${"Korg".toLowerCase()}`}
          element={<SingleCharacter char="Korg" />}
        />
        <Route
          path={`/home/characters/${"Executioner".toLowerCase()}`}
          element={<SingleCharacter char="Executioner" />}
        />
        <Route
          path={`/home/characters/${"Dr. Erik Selvig".toLowerCase()}`}
          element={<SingleCharacter char="Dr. Erik Selvig" />}
        />
        <Route
          path={`/home/characters/${"Ava Starr".toLowerCase()}`}
          element={<SingleCharacter char="Ava Starr" />}
        />
        <Route
          path={`/home/characters/${"Alexander Pierce".toLowerCase()}`}
          element={<SingleCharacter char="Alexander Pierce" />}
        />
        <Route
          path={`/home/characters/${"Iron Monger".toLowerCase()}`}
          element={<SingleCharacter char="Iron Monger" />}
        />

        {/* Movies */}
        
        <Route
          path={`/home/movies/${"Iron Man".toLowerCase()}`}
          element={<SingleMovie movie="Iron Man" />}
        />
        <Route
          path={`/home/movies/${"The Incredible Hulk".toLowerCase()}`}
          element={<SingleMovie movie="The Incredible Hulk" />}
        />
        <Route
          path={`/home/movies/${"Iron Man 2".toLowerCase()}`}
          element={<SingleMovie movie="Iron Man 2" />}
        />
        <Route
          path={`/home/movies/${"Thor".toLowerCase()}`}
          element={<SingleMovie movie="Thor" />}
        />
        <Route
          path={`/home/movies/${"Captain America The First Avenger".toLowerCase()}`}
          element={<SingleMovie movie="Captain America The First Avenger" />}
        />
        <Route
          path={`/home/movies/${"Marvel's The Avengers".toLowerCase()}`}
          element={<SingleMovie movie="Marvel's The Avengers" />}
        />
        <Route
          path={`/home/movies/${"Iron Man 3".toLowerCase()}`}
          element={<SingleMovie movie="Iron Man 3" />}
        />
        <Route
          path={`/home/movies/${"Thor The Dark World".toLowerCase()}`}
          element={<SingleMovie movie="Thor The Dark World" />}
        />
        <Route
          path={`/home/movies/${"Captain America The Winter Soldier".toLowerCase()}`}
          element={<SingleMovie movie="Captain America The Winter Soldier" />}
        />
        <Route
          path={`/home/movies/${"Guardians of the Galaxy".toLowerCase()}`}
          element={<SingleMovie movie="Guardians of the Galaxy" />}
        />
        <Route
          path={`/home/movies/${"Avengers Age of Ultron".toLowerCase()}`}
          element={<SingleMovie movie="Avengers Age of Ultron" />}
        />
        <Route
          path={`/home/movies/${"Ant-Man".toLowerCase()}`}
          element={<SingleMovie movie="Ant-Man" />}
        />
        <Route
          path={`/home/movies/${"Captain America  Civil War".toLowerCase()}`}
          element={<SingleMovie movie="Captain America  Civil War" />}
        />
        <Route
          path={`/home/movies/${"Doctor Strange".toLowerCase()}`}
          element={<SingleMovie movie="Doctor Strange" />}
        />
        <Route
          path={`/home/movies/${"Guardians of the Galaxy Vol. 2".toLowerCase()}`}
          element={<SingleMovie movie="Guardians of the Galaxy Vol. 2" />}
        />
        <Route
          path={`/home/movies/${"Spider-Man Homecoming".toLowerCase()}`}
          element={<SingleMovie movie="Spider-Man Homecoming" />}
        />
        <Route
          path={`/home/movies/${"Thor Ragnarok".toLowerCase()}`}
          element={<SingleMovie movie="Thor Ragnarok" />}
        />
        <Route
          path={`/home/movies/${"Black Panther".toLowerCase()}`}
          element={<SingleMovie movie="Black Panther" />}
        />
        <Route
          path={`/home/movies/${"Avengers Infinity War".toLowerCase()}`}
          element={<SingleMovie movie="Avengers Infinity War" />}
        />
        <Route
          path={`/home/movies/${"Ant-Man and the Wasp".toLowerCase()}`}
          element={<SingleMovie movie="Ant-Man and the Wasp" />}
        />
        <Route
          path={`/home/movies/${"Captain Marvel".toLowerCase()}`}
          element={<SingleMovie movie="Captain Marvel" />}
        />
        <Route
          path={`/home/movies/${"Avengers Endgame".toLowerCase()}`}
          element={<SingleMovie movie="Avengers Endgame" />}
        />
        <Route
          path={`/home/movies/${"Spider-Man Far From Home".toLowerCase()}`}
          element={<SingleMovie movie="Spider-Man Far From Home" />}
        />
        <Route
          path={`/home/movies/${"Black Widow".toLowerCase()}`}
          element={<SingleMovie movie="Black Widow" />}
        />
        <Route
          path={`/home/movies/${"Shang-Chi and the Legend of the Ten Rings".toLowerCase()}`}
          element={<SingleMovie movie="Shang-Chi and the Legend of the Ten Rings" />}
        />
        <Route
          path={`/home/movies/${"Eternals".toLowerCase()}`}
          element={<SingleMovie movie="Eternals" />}
        />
        <Route
          path={`/home/movies/${"Spider-Man No Way Home".toLowerCase()}`}
          element={<SingleMovie movie="Spider-Man No Way Home" />}
        />
        <Route
          path={`/home/movies/${"Doctor Strange in the Multiverse of Madness".toLowerCase()}`}
          element={<SingleMovie movie="Doctor Strange in the Multiverse of Madness" />}
        />
        <Route
          path={`/home/movies/${"Thor Love and Thunder".toLowerCase()}`}
          element={<SingleMovie movie="Thor Love and Thunder" />}
        />
        <Route
          path={`/home/movies/${"Black Panther Wakanda Forever".toLowerCase()}`}
          element={<SingleMovie movie="Black Panther Wakanda Forever" />}
        />
        <Route
          path={`/home/movies/${"Ant-Man and the Wasp Quantumania".toLowerCase()}`}
          element={<SingleMovie movie="Ant-Man and the Wasp Quantumania" />}
        />
        <Route
          path={`/home/movies/${"Guardians of the Galaxy Vol. 3".toLowerCase()}`}
          element={<SingleMovie movie="Guardians of the Galaxy Vol. 3" />}
        />
        <Route
          path={`/home/movies/${"The Marvels".toLowerCase()}`}
          element={<SingleMovie movie="The Marvels" />}
        />




        <Route path="/home/characters" element={<Characters />} />
        <Route path="/home/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}
