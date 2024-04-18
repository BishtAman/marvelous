import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
export const CharacterCard = ({ name, imageURL}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true); // Set imageLoaded to true when the image is loaded
  };

  return (
    <Link to={`/home/characters/${name.toLowerCase()}`} > 
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        className="character-card text-black my-8 mx-5  "
      >
      {!imageLoaded && <PulseLoader className="mt-[100px]" color="#ff0000" />} {/* Placeholder while image is loading */}
        <img alt="Character" src={imageURL} className={`h-[250px] ${imageLoaded ? 'block' : 'hidden'}`} onLoad={handleImageLoad}/>
        <h1 className="w-[187.5px] h-[100px] py-[30px] px-5 font-extrabold rounded-br-[3.5rem] text-white">{name.toUpperCase()}</h1>
      </motion.div>
    </Link>
  );
};

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const CharacterCard = ({ name, imageURL }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setImageLoaded(true); // Set imageLoaded to true when the image is loaded
//   };

//   return (
//     <Link to={`/home/characters/${name.toLowerCase()}`}>
//       <motion.div
//         whileTap={{ scale: 0.95 }}
//         whileHover={{ scale: 1.1 }}
//         className="character-card text-black my-8 mx-5"
//       >
//         {!imageLoaded && <div>Loading...</div>} {/* Placeholder while image is loading */}
//         <img
//           alt="Character"
//           src={imageURL}
//           className={`h-[250px] ${imageLoaded ? 'block' : 'hidden'}`} // Show image only when loaded
//           onLoad={handleImageLoad} // Call handleImageLoad when image is loaded
//         />
//         <h1 className="w-[187.5px] h-[100px] py-[30px] px-5 font-extrabold rounded-br-[3.5rem] text-white">
//           {name.toUpperCase()}
//         </h1>
//       </motion.div>
//     </Link>
//   );
// };

// export default CharacterCard;
