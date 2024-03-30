import React from "react";

type Props = { label: string; placeholder: string; id: string };

export default function InputForm({ label, placeholder, id }: Props) {
  return (
    <div className="flex flex-col justify-center py-1">
      <div className="flex flex-col">
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        <input
          id={id}
          name={id}
          className="justify-center items-start outline-[#1CACE4] px-3.5 py-4 mt-3 whitespace-nowrap rounded-sm border border-solid bg-[#F8FCFF] border-[#E0E4F1] max-md:pr-5"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
