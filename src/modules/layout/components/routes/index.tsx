"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { Route } from "@/types";
import { useNavContext } from "@/lib/context/nav-context";

interface RoutesProps {
  routes: Route[];
}

const Routes = ({ routes }: RoutesProps) => {
  const currentPath = usePathname();

  const { showMenu } = useNavContext();

  return (
    <div className="flex flex-col gap-1 items-start">
      {routes.map((route, index) => (
        <Link
          href={route.path}
          key={index}
          className={`relative flex ${
            showMenu
              ? "gap-5 items-center px-4"
              : "gap-0 items-start justify-center"
          } font-semibold py-2 w-full text-sm ${
            currentPath === route.path || currentPath.startsWith(route.path)
              ? "bg-terciary text-secondary"
              : "text-neutral-800 hover:bg-neutral-100 hover:text-secondary"
          }`}
        >
          <span>{route.icon}</span>
          {showMenu && (
            <div className="flex items-center gap-1">
              <h3>{route.name}</h3>
              {route.number && (
                <span className="bg-red-600 text-neutral-100 py-[1px] px-[8px] rounded-full text-[10px]">
                  {route.number}
                </span>
              )}
            </div>
          )}
          {!showMenu && (
            <span>
              {route.number && (
                <span className="bg-red-600 text-neutral-100 rounded-full px-2 text-[10px] absolute top-0 left-5">
                  {route.number}
                </span>
              )}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Routes;
