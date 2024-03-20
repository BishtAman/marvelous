import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import {  Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav className="nav-bar flex justify-evenly text-white font-extrabold items-center py-[35px] ">
      {/* nav elements to be added */}

      <Link  to="/auth">
        <motion.h1 whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
          CHARACTERS
        </motion.h1>
      </Link>

      <a href="#">
        <motion.h1 whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
          MOVIES
        </motion.h1>
      </a>
      <motion.img
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        className="h-[50px] z-50"
        src={Logo}
        alt="logo"
      />
      <a href="#">
        <motion.h1 whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
          TV
        </motion.h1>
      </a>
      <a href="#">
        <motion.h1 whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
          GAMES
        </motion.h1>
      </a>
      {/* <Outlet /> */}
    </nav>
  );
};
