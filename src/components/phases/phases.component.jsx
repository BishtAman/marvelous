import { PageHeading } from "../page-heading/page-heading.component";
import { useState, useEffect } from "react";
import ONE from '../../assets/PHASES/1.png'
import TWO from '../../assets/PHASES/2.png'
import THREE from '../../assets/PHASES/3.png'
import FOUR from '../../assets/PHASES/4.png'
import FIVE from '../../assets/PHASES/5.png'
import MOVIES_DATA from "../../data/movie_data";
import { MovieCard } from "../movie-card/movie-card.component";


export const Phases = () => {

    const [currentPhase, setCurrentPhase] = useState("Phase 1");
  const [loadedMovies, setLoadedMovies] = useState([]);

  useEffect(() => {
    const fetchCharacterImages = async () => {
      const tierDetails = MOVIES_DATA.find((tier) => tier.title === currentPhase);
      if (tierDetails) {
        try {
          const loadedMovies = await Promise.all(
            tierDetails.movies.map(async (char) => {
              if (!char.movieName) {
                throw new Error(`imageName not defined for character: ${char.movieName}`);
              }
  
              const imageModule = await import(`../../assets/movies/all/${char.movieName}.png`);
              return { ...char, imageURL: imageModule.default };
            })
          );
          setLoadedMovies(loadedMovies);
        } catch (error) {
          console.error("Error loading character images:", error);
        }
      }
    };
  
    fetchCharacterImages();
  }, [currentPhase]);

  return (
    <div>
      <section className="flex  px-5 space-x-4 bg-[#87b3a6d9] mb-[20px] mt-[20px] h-[80px]">
        <button className=" teirs" onClick={() => setCurrentPhase("Phase 1")}>
          <PageHeading
            heading={ONE}
            className="w-full justify-center"
          />
        </button>
        <button className=" teirs" onClick={() => setCurrentPhase("Phase 2")}>
          <PageHeading
            heading={TWO}
            className="w-full justify-center"
          />
        </button>
        <button className=" teirs" onClick={() => setCurrentPhase("Phase 3")}>
          <PageHeading
            heading={THREE}
            className="w-full justify-center"
          />
        </button>
        <button className=" teirs" onClick={() => setCurrentPhase("Phase 4")}>
          <PageHeading
            heading={FOUR}
            className="w-full justify-center"
          />
        </button>
        <button className=" teirs" onClick={() => setCurrentPhase("Phase 5")}>
          <PageHeading
            heading={FIVE}
            className="w-full justify-center"
          />
        </button>
      </section>
      <div className="flex flex-wrap justify-evenly">
        {loadedMovies.map(({ movieName, imageURL }) => (
          <MovieCard key={movieName} movieName={movieName} imageURL={imageURL} />
        ))}
      </div>
    </div>
  );
};
