import React from "react";
import Item from "../item";
import { useInterfaceContext } from "@/lib/context/interface-context";

const ItemsList = () => {
  const { selectedItems, handleItemClick } = useInterfaceContext();
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-base sm:text-sm font-semibold">
      <Item
        number="1st"
        text="Bed Frame"
        selected={selectedItems.includes(0)}
        onClick={() => handleItemClick(0)}
      />
      <Item
        number="2nd"
        text="Bottles"
        selected={selectedItems.includes(1)}
        onClick={() => handleItemClick(1)}
      />
      <Item
        number="3rd"
        text="Bunk Bed"
        selected={selectedItems.includes(2)}
        onClick={() => handleItemClick(2)}
      />
      <Item
        text="Car Seat"
        selected={selectedItems.includes(3)}
        onClick={() => handleItemClick(3)}
      />
      <Item
        text="Clothing"
        selected={selectedItems.includes(4)}
        onClick={() => handleItemClick(4)}
      />
      <Item
        text="Crib"
        selected={selectedItems.includes(5)}
        onClick={() => handleItemClick(5)}
      />
    </div>
  );
};

export default ItemsList;
