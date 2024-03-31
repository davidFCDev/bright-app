"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavContext } from "@/lib/context/nav-context";
import { ROUTES } from "@/constants";
import { motion } from "framer-motion";

const Routes = () => {
  const currentPath = usePathname();

  const { showMenu, navAnimation } = useNavContext();

  return (
    <div className="flex flex-col gap-1 items-starts">
      {ROUTES.map((route, index) => (
        <Link
          href={route.path}
          key={index}
          className={`relative flex ${
            showMenu
              ? "gap-4 items-center px-6 sm:px-4"
              : "gap-0 items-start justify-center"
          } font-semibold py-4 sm:py-2 w-full text-sm ${
            currentPath === route.path || currentPath.startsWith(route.path)
              ? "bg-terciary text-secondary"
              : "text-neutral-800 hover:bg-neutral-100 hover:text-secondary"
          }`}
        >
          <span>{route.icon}</span>
          {showMenu && (
            <motion.div {...navAnimation} className="flex items-center gap-1">
              <h3 className="text-xl sm:text-base whitespace-nowrap">{route.name}</h3>

              {route === ROUTES[7] && (
                <span className="bg-red-600 text-neutral-100 py-[1px] px-[8px] rounded-full text-[10px]">
                  2
                </span>
              )}
            </motion.div>
          )}
          {!showMenu && (
            <>
              {route === ROUTES[7] && (
                <span className="bg-red-600 text-neutral-100 rounded-full px-2 text-[10px] absolute top-0 left-5">
                  2
                </span>
              )}
            </>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Routes;
