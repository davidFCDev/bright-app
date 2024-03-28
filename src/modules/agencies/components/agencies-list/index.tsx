import { AGENCIES_LIST } from "@/constants";
import Line from "@/modules/common/line";
import React from "react";
import AgencyOptions from "../agency-options";
import { useInterfaceContext } from "@/lib/context/interface-context";

const AgenciesList = () => {
  const { selectedOption, toggleAgencyOptions } = useInterfaceContext();
  
  return (
    <div className="w-full flex flex-col gap-5">
      {Object.keys(AGENCIES_LIST).map((letter) => (
        <div key={letter} className="w-full flex flex-col gap-5">
          <div className="flex items-center gap-3 w-full">
            <h2 className="text-neutral-500 font-semibold text-xl">{letter}</h2>
            <Line />
          </div>
          <ul className="flex items-center  gap-4">
            {AGENCIES_LIST[letter].map((agency, index) => (
              <li
                onClick={() => toggleAgencyOptions(letter, index)}
                key={agency}
                className="px-4 py-2 border border-neutral-300 text-black font-semibold text-sm hover:border-neutral-400 hover:cursor-pointer relative"
              >
                {agency}
                {selectedOption &&
                  selectedOption[0] === letter &&
                  selectedOption[1] === index && <AgencyOptions />}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AgenciesList;
