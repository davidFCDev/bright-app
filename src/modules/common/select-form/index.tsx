import Image from "next/image";
import React from "react";

type Props = {
  label: string;

  id: string;
  options: string[];
};

export default function SelectForm({ label, id, options }: Props) {
  return (
    <div className="flex flex-col justify-center py-1 relative">
      <div className="flex flex-col">
        <label htmlFor={id} className="font-semibold w-full">
          {label}
        </label>

        <div className="absolute pl-1 right-5 bottom-5 z-30 bg-[#F8FCFF]">
          <Image
            src={"/icons/DropDown.svg"}
            alt=""
            width={15}
            height={15}
            className=""
          />
        </div>
        <select
          name={id}
          id={id}
          className="justify-center relative appearance-none items-start outline-[#1CACE4] px-3.5 py-4 mt-3 whitespace-nowrap rounded-sm border border-solid bg-[#F8FCFF] border-[#E0E4F1] max-md:pr-5"
        >
          {/* Prepend a default option that acts as a placeholder */}
          <option value="" disabled selected hidden className="truncate max-w-5 w-full">
            Please select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
