import React from "react";

interface ButtonProps {
  text: string;
  props?: any;
  onClick?: () => void;
}

const Button = ({ text, props, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${props} px-4 py-2 bg-primary text-white rounded-[2px] hover:bg-secondary`}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
