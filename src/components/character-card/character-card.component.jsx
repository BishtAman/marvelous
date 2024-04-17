import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CharacterCard = ({ name, imageURL}) => {
// console.log(`this is route from character card: /home/characters/${name.toLowerCase()}`)
  return (
    <Link to={`/home/characters/${name.toLowerCase()}`} > 
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        className="character-card text-black my-8 mx-5  "
      >
        <img alt="Character" src={imageURL} className="h-[250px] " />
        <h1 className=" h-[100px] py-[30px] px-5 font-extrabold rounded-br-[3.5rem] text-white">{name.toUpperCase()}</h1>
      </motion.div>
    </Link>
  );
};
