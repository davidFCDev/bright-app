"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface UsersContextProps {
    showAdd: boolean;
    showEdit: boolean;
    selectedRow: number | null;
    toggleOptions: (index: number) => void;
    handleShowAdd: () => void;
    handleShowEdit: () => void;
}

export const UsersContext = createContext<UsersContextProps | undefined>(
  undefined
);

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const toggleOptions = (index: number) => {
    setSelectedRow(selectedRow === index ? null : index);
  };
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  const handleShowEdit = () => {
    setSelectedRow(null);
    setShowEdit(!showEdit);
  };

  return <UsersContext.Provider value={{
    showAdd,
    showEdit,
    selectedRow,
    toggleOptions,
    handleShowAdd,
    handleShowEdit,
  }}>{children}</UsersContext.Provider>;
};

export const useUsersContext = () => {
  const usersContext = useContext(UsersContext);
  if (!usersContext) {
    throw new Error("useUsersContext must be used within a NavProvider");
  }
  return usersContext;
};
