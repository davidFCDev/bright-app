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

const Minibar = ({ routes }: RoutesProps) => {
  const { showMenu, handleShow } = useNavContext();

  return (
    <>
      {!showMenu && (
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="w-fit h-screen flex flex-col gap-20 justify-between text-neutral-800 border-r border-neutral-300"
        >
          <div className="flex flex-col">
            <div className="border-b border-neutral-300 flex justify-center items-center">
              <div className="px-4 py-11">
                <Image src="/logo-sm.png" alt="logo" width={50} height={50} />
              </div>
            </div>
            <div className="px-3 py-6">
              <Routes routes={routes} />
            </div>
          </div>

          <div className="flex flex-col gap-4 font-semibold items-center py-5">
            <button onClick={handleShow} className="rotate-180">
              <Icon svg="/icons/DoubleArrow.svg" />
            </button>
            <User />
          </div>
        </motion.aside>
      )}
    </>
  );
};

export default Minibar;
