import Icon from "@/modules/common/icons";
import Image from "next/image";
import React from "react";
import CountryTable from "../country-table";

interface ChildrenServedProps {
  handleToggle: (index: number) => void;
  toggleShow: boolean[];
}

const ChildrenServed = ({ handleToggle, toggleShow }: ChildrenServedProps) => {
  return (
    <div className="flex flex-col items-start gap-5 w-full">
      <button
        onClick={() => handleToggle(1)}
        className="flex items-center gap-2"
      >
        <Icon svg="/icons/Zips.svg" width={18} />
        <h3 className="font-semibold">Children Served by Country</h3>
        <Icon
          svg="/icons/DropDown.svg"
          width={18}
          props={`${toggleShow ? "rotate-180" : ""}`}
        />
      </button>
      {toggleShow[1] && (
        <div className="flex items-center justify-end w-full">
          <div className="w-[25%] mx-10">
            <Image
              src="/rounded-chart2.png"
              alt="chart"
              width={200}
              height={200}
            />
          </div>
          <div className="w-[75%]">
            <CountryTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildrenServed;
