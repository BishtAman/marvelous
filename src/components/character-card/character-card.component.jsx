import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CharacterCard = ({ name, imageURL}) => {

  return (
    <Link to={`/home/characters/${name.toLowerCase()}`}>
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        className="character-card text-black my-5 mx-5"
      >
        <img alt="Character" src={imageURL} className="h-[400px]" />
        <h1>{name.toUpperCase()}</h1>
      </motion.div>
    </Link>
  );
};
