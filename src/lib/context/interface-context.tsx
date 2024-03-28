"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface InterfaceContextProps {
  showAdd: boolean;
  showEdit: boolean;
  selectedRow: number | null;
  toggleOptions: (index: number) => void;
  handleShowAdd: () => void;
  handleShowEdit: () => void;
}

export const InterfaceContext = createContext<
  InterfaceContextProps | undefined
>(undefined);

interface InterfaceProviderProps {
  children: ReactNode;
}

export const InterfaceProvider = ({ children }: InterfaceProviderProps) => {
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

  return (
    <InterfaceContext.Provider
      value={{
        showAdd,
        showEdit,
        selectedRow,
        toggleOptions,
        handleShowAdd,
        handleShowEdit,
      }}
    >
      {children}
    </InterfaceContext.Provider>
  );
};

export const useInterfaceContext = () => {
  const interfaceContext = useContext(InterfaceContext);
  if (!interfaceContext) {
    throw new Error("useInterfaceContext must be used within a NavProvider");
  }
  return interfaceContext;
};
