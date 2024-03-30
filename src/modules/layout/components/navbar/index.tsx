import Routes from "../routes";
import Image from "next/image";
import User from "../user";
import Icon from "@/modules/common/icons";
import { useNavContext } from "@/lib/context/nav-context";
import { motion } from "framer-motion";
import { Route } from "@/types";

interface RoutesProps {
  routes: Route[];
}

const Navbar = ({ routes }: RoutesProps) => {
  const { showMenu, handleShow } = useNavContext();

  return (
    <>
      {showMenu && (
        <motion.nav
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="flex flex-col w-fit gap-20 h-screen  justify-between text-neutral-800 border-r border-neutral-300"
        >
          <div className="flex flex-col">
            <div className="border-b border-neutral-300">
              <div className="p-8">
                <Image src="/logo.png" alt="logo" width={200} height={200} />
              </div>
            </div>
            <div className="px-3 py-6">
              <Routes routes={routes} />
            </div>
          </div>

          <div className="flex flex-col p-3 gap-3 font-semibold w-full">
            <button
              className="flex items-center gap-2 w-full"
              onClick={handleShow}
            >
              <Icon svg="/icons/DoubleArrow.svg" />
              <span className="text-sm text-neutral-900">Hide Menu</span>
            </button>

            <User />
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
