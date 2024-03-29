"use client";
import { DELIVERY_TABLE, REQUESTS_TABLE } from "@/constants";
import { useParams } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

export interface InterfaceContextProps {
  showAdd: boolean;
  showEdit: boolean;
  selectedRow: number | null;
  toggleOptions: (index: number) => void;
  handleShowAdd: () => void;
  handleShowEdit: () => void;
  goBack: () => void;
  delivery: any;
  request: any;
  selectedOption: [string, number] | null;
  toggleAgencyOptions: (letter: string, index: number) => void;
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
  const [selectedOption, setSelectedOption] = useState<[string, number] | null>(
    null
  );

  const toggleAgencyOptions = (letter: string, index: number) => {
    const optionKey: [string, number] = [letter, index];
    setSelectedOption((prev) =>
      prev && prev[0] === letter && prev[1] === index ? null : optionKey
    );
  };

  const { id } = useParams() || { id: undefined };
  const delivery = DELIVERY_TABLE.find((item) => item.id === Number(id));
  const request = REQUESTS_TABLE.find((item) => item.id === Number(id));

  const goBack = () => {
    window.history.back();
  };

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
        goBack,
        delivery,
        request,
        selectedOption,
        toggleAgencyOptions,
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
