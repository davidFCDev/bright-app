import React from "react";

interface ItemProps {
  number?: string;
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

const Item = ({ number, text, selected, onClick }: ItemProps) => {
  return (
    <button
      className={`${
        selected ? "border-neutral-200 text-neutral-300" : "border-neutral-300"
      } flex items-center gap-1 font-semibold px-6 py-6 border`}
      onClick={onClick}
    >
      {number && (
        <span
          className={`${
            selected
              ? "bg-white text-neutral-300 border border-neutral-300"
              : "bg-terciary text-violet-900 border border-violet-900"
          } px-1`}
        >
          {number}
        </span>
      )}
      {text}
    </button>
  );
};

export default Item;
