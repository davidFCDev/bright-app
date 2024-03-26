"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface NavContextProps {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
  handleShow: () => void;
}

export const NavContext = createContext<NavContextProps | undefined>(undefined);

interface NavProviderProps {
  children: ReactNode;
}

export const NavProvider = ({ children }: NavProviderProps) => {
  const [showMenu, setShowMenu] = useState(true);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavContext.Provider
      value={{
        showMenu,
        setShowMenu,
        handleShow,
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
