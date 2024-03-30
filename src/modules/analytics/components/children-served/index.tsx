import Icon from "@/modules/common/icons";
import Image from "next/image";
import React from "react";
import CountryTable from "../country-table";
import { useInterfaceContext } from "@/lib/context/interface-context";

const ChildrenServed = () => {
  const { toggleShow, handleToggle } = useInterfaceContext();

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
          props={`${toggleShow[1] ? "rotate-180" : ""}`}
        />
      </button>
      {toggleShow[1] && (
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-end w-full">
          <div className="sm:w-[25%] sm:mx-10">
            <Image
              src="/rounded-chart2.png"
              alt="chart"
              width={200}
              height={200}
            />
          </div>
          <div className="sm:w-[75%]">
            <CountryTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildrenServed;
