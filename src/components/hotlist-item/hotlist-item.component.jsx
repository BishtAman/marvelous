import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const HotListItem = ({ name, img, className, description }) => {
  return (
    <motion.div
      className={`hotlist-item w-[400px] mt-[30px] flex flex-col items-center ${className}`}
    >
     <Link to={`/home/characters/${name.toLowerCase()}`}> 
     <motion.img
        whileHover={{ scale: 1.08, y: -50 }}
        whileTap={{ scale: 0.9 }}
        src={img}
        alt="hotlist-img"
        className="h-[450px] "
      />
     </Link>
      <section className="text-white p-[20px]">
        <h1 className="text-[20px] my-[5px] font-bold">
          <mark className="p-[5px]">{name}</mark>
        </h1>
        <p className="my-[20px] text-[16px] ">{description}</p>
      </section>
    </motion.div>
  );
};
