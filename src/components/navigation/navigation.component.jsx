import { Fragment } from "react";
import Logo from "../../assets/fontbolt.png";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

export const Navigation = () => {
  return (
    <Fragment>
      <nav className="nav-bar  flex justify-evenly text-white font-bold items-center py-[35px]  z-[9999]">
        <motion.h1 whileTap={{ scale: 0.95 }} className="text-[17px] max-md:text-[10px] max-sm:text-[8px]" whileHover={{ scale: 1.1 }}>
          <Link to="/home/characters">CHARACTERS</Link>
        </motion.h1>

        <motion.h1 whileTap={{ scale: 0.95 }} className="max-md:text-[10px] max-sm:text-[8px]" whileHover={{ scale: 1.1 }}>
          <Link to="/test">MOVIES</Link>
        </motion.h1>

        <Link to="/">
          <motion.img
            className="h-[30px] z-50 max-sm:h-[20px]"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            src={Logo}
            alt="logo"
          />
        </Link>

        <motion.h1 whileTap={{ scale: 0.95 }} className="max-md:text-[10px] max-sm:text-[8px]" whileHover={{ scale: 1.1 }}>
          <Link to="/test">TV</Link>
        </motion.h1>

        <motion.h1 whileTap={{ scale: 0.95 }} className="max-md:text-[10px] max-sm:text-[8px]" whileHover={{ scale: 1.1 }}>
          <Link to="/test">GAMES</Link>
        </motion.h1>
      </nav>
      <Outlet />
    </Fragment>
  );
};
