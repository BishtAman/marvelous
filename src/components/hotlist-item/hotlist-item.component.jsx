import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const HotListItem = ({ name, img, className, description }) => {
  return (
    <motion.div
      className={`hotlist-item w-[300px] max-md:w-[200px] max-sm:w-[150px] mt-[30px] flex flex-col  items-center ${className}`}
    >
     <Link to={`/home/characters/${name.toLowerCase()}`}> 
     <motion.img
        whileHover={{ scale: 1.08, y: -50 }}
        whileTap={{ scale: 0.9 }}
        src={img}
        alt="hotlist-img"
        className=" "
      />
     </Link>
      <section className="text-white p-[20px] max-sm:p-[15px]">
        <h1 className="text-[20px] my-[5px] font-bold max-sm:text-[11px] max-sm:text-center">
          <mark className="p-[5px] max-sm:p-[2px]">{name}</mark>
        </h1>
        <p className="my-[20px] text-[16px] max-sm:text-[10px] text-center max-sm:font-thin">{description}</p>
      </section>
    </motion.div>
  );
};
