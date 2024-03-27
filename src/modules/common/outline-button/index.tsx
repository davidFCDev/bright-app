import React, { ReactNode } from "react";

interface ButtonProps {
  text: string;
  props?: any;
  icon?: ReactNode;
  onClick?: () => void;
}

const OutButton = ({ text, props, icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${props} flex items-center gap-2 px-4 py-2 text-neutral-800 border border-neutral-300 rounded-[2px] hover:border-neutral-400`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default OutButton;
