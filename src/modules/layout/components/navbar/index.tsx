import Routes from "../routes";
import Image from "next/image";
import User from "../user";
import Icon from "@/modules/common/icons";
import { useNavContext } from "@/lib/context/nav-context";
import { motion } from "framer-motion";

const Navbar = () => {
  const { showMenu, handleShow, navAnimation } = useNavContext();

  return (
    <nav className="hidden sm:flex flex-col gap-20 w-auto h-screen justify-between text-neutral-800 border-r border-neutral-300">
      <div className="flex flex-col">
        <div className="border-b border-neutral-300">
          <div>
            {showMenu ? (
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center items-center px-10 py-7"
              >
                <Image src="/logo.png" width={220} height={150} alt="logo" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center items-center py-10 px-3"
              >
                <Image src="/logo-sm.png" alt="logo" width={50} height={50} />
              </motion.div>
            )}
          </div>
        </div>
        <div className="px-3 py-6">
          <Routes />
        </div>
      </div>

      {showMenu ? (
        <motion.div
          {...navAnimation}
          className="flex flex-col p-3 gap-3 font-semibold w-full"
        >
          <button
            className="flex items-center gap-2 w-full"
            onClick={handleShow}
          >
            <Icon svg="/icons/DoubleArrow.svg" />
            <span className="text-sm text-neutral-900">Hide Menu</span>
          </button>

          <User />
        </motion.div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <button onClick={handleShow}>
            <Icon svg="/icons/DoubleArrow.svg" />
          </button>
          <button>
            <Icon svg="/icons/Settings.svg" />
          </button>
          <button>
            <Icon svg="/icons/Logout.svg" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
