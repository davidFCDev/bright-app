"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface NavContextProps {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
  handleShow: () => void;
  navAnimation: {
    initial: { opacity: number; x: number };
    animate: { opacity: number; x: number };
    exit: { opacity: number; x: number };
    transition: { duration: number };
  };
}

export const NavContext = createContext<NavContextProps | undefined>(undefined);

interface NavProviderProps {
  children: ReactNode;
}

export const NavProvider = ({ children }: NavProviderProps) => {
  const [showMenu, setShowMenu] = useState(true);
  const navAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.4 },
  };

  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavContext.Provider
      value={{
        showMenu,
        setShowMenu,
        handleShow,
        navAnimation,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const navContext = useContext(NavContext);
  if (!navContext) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return navContext;
};
