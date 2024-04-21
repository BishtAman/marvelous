import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
export const MovieCard = ({ movieName, imageURL}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true); // Set imageLoaded to true when the image is loaded
  };

  return (
    <Link to={`/home/movies/${movieName.toLowerCase()}`} > 
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        className="movies-card text-black my-8 mx-5  w-[300px] max-sm:w-[142px]"
      >
      {!imageLoaded && <PulseLoader className="mx-auto" color="#ff0000" />} {/* Placeholder while image is loading */}
        <img alt="movies" src={imageURL} className={`h-full ${imageLoaded ? 'block' : 'hidden'}`} onLoad={handleImageLoad}/>
        <h1 className="text-center h-[100px] max-sm:h-[80px] py-[30px] max-sm:py-[20px] px-5 font-bold max-sm:font-normal text-[17px] max-sm:text-[13px] rounded-br-[3.5rem] text-white">{movieName.toUpperCase()}</h1>
      </motion.div>
    </Link>
  );
};
