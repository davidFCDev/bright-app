"use client";
import { DELIVERY_TABLE, REQUESTS_TABLE } from "@/constants";
import { useParams } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

export interface InterfaceContextProps {
  showUserAdd: boolean;
  showUserEdit: boolean;
  selectedRow: number | null;
  delivery: any;
  request: any;
  selectedOption: [string, number] | null;
  selectedItems: number[];
  toggleShow: boolean[];
  showChildAdd: boolean;
  showItemAdd: boolean;
  showSendForm: boolean;
  showAgencyAdd: boolean;
  showNewChat: boolean;
  showDeliveryLocations: boolean;
  showDeliveryVolunteers: boolean;
  handleShowDeliveryVolunteersAdd: () => void;
  handleShowDeliveryLocationsAdd: () => void;
  handleShowNewChat: () => void;
  handleShowAgencyAdd: () => void;
  handleShowSendForm: () => void;
  toggleOptions: (index: number) => void;
  handleShowUserAdd: () => void;
  handleShowUserEdit: () => void;
  goBack: () => void;
  handleItemClick: (index: number) => void;
  toggleAgencyOptions: (letter: string, index: number) => void;
  handleToggle: (index: number) => void;
  handleShowChildAdd: () => void;
  handleShowItemAdd: () => void;
}

export const InterfaceContext = createContext<
  InterfaceContextProps | undefined
>(undefined);

interface InterfaceProviderProps {
  children: ReactNode;
}

export const InterfaceProvider = ({ children }: InterfaceProviderProps) => {
  const [showUserAdd, setShowUserAdd] = useState(false);
  const [showUserEdit, setShowUserEdit] = useState(false);
  const [showNewChat, setShowNewChat] = useState(false);
  const [showAgencyAdd, setShowAgencyAdd] = useState(false);
  const [showSendForm, setShowSendForm] = useState(false);
  const [showChildAdd, setShowChildAdd] = useState(false);
  const [showItemAdd, setShowItemAdd] = useState(false);
  const [showDeliveryLocations, setShowDeliveryLocations] = useState(false);
  const [showDeliveryVolunteers, setShowDeliveryVolunteers] = useState(false);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [toggleShow, setToggleShow] = useState<boolean[]>([true, true]);
  const [selectedOption, setSelectedOption] = useState<[string, number] | null>(
    null
  );

  const handleToggle = (index: number) => {
    setToggleShow((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleItemClick = (index: number) => {
    const selectedIndex = selectedItems.indexOf(index);
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, index]);
    } else {
      const newSelectedItems = [...selectedItems];
      newSelectedItems.splice(selectedIndex, 1);
      setSelectedItems(newSelectedItems);
    }
  };

  const toggleAgencyOptions = (letter: string, index: number) => {
    const optionKey: [string, number] = [letter, index];
    setSelectedOption((prev) =>
      prev && prev[0] === letter && prev[1] === index ? null : optionKey
    );
  };

  const toggleOptions = (index: number) => {
    setSelectedRow(selectedRow === index ? null : index);
  };
  
  const handleShowUserAdd = () => {
    setShowUserAdd(!showUserAdd);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowUserEdit = () => {
    setSelectedRow(null);
    setShowUserEdit(!showUserEdit);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowChildAdd = () => {
    setShowChildAdd(!showChildAdd);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowItemAdd = () => {
    setShowItemAdd(!showItemAdd);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowSendForm = () => {
    setShowSendForm(!showSendForm);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowAgencyAdd = () => {
    setShowAgencyAdd(!showAgencyAdd);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowNewChat = () => {
    setShowNewChat(!showNewChat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowDeliveryLocationsAdd = () => {
    setShowDeliveryLocations(!showDeliveryLocations);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowDeliveryVolunteersAdd = () => {
    setShowDeliveryVolunteers(!showDeliveryVolunteers);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** Router **/
  const { id } = useParams() || { id: undefined };
  const delivery = DELIVERY_TABLE.find((item) => item.id === Number(id));
  const request = REQUESTS_TABLE.find((item) => item.id === Number(id));

  const goBack = () => {
    window.history.back();
  };

  return (
    <InterfaceContext.Provider
      value={{
        handleItemClick,
        toggleOptions,
        handleShowUserAdd,
        handleShowUserEdit,
        toggleAgencyOptions,
        goBack,
        handleToggle,
        handleShowChildAdd,
        handleShowItemAdd,
        handleShowSendForm,
        handleShowAgencyAdd,
        handleShowNewChat,
        handleShowDeliveryLocationsAdd,
        handleShowDeliveryVolunteersAdd,
        showDeliveryVolunteers,
        showDeliveryLocations,
        showNewChat,
        showAgencyAdd,
        showUserAdd,
        showUserEdit,
        selectedRow,
        selectedItems,
        showSendForm,
        delivery,
        request,
        selectedOption,
        toggleShow,
        showChildAdd,
        showItemAdd,
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
