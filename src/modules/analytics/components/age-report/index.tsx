import Icon from "@/modules/common/icons";
import React from "react";
import AgeTable from "../age-table";
import Image from "next/image";
import { useInterfaceContext } from "@/lib/context/interface-context";

const AgeReport = () => {
  const { toggleShow, handleToggle } = useInterfaceContext();

  return (
    <div className="flex flex-col items-start gap-5 w-full">
      <button
        onClick={() => handleToggle(0)}
        className="flex items-center gap-2"
      >
        <Icon svg="/icons/Age.svg" width={18} />
        <h3 className="font-semibold">Age Report</h3>
        <Icon
          svg="/icons/DropDown.svg"
          width={18}
          props={`${toggleShow[0] ? "rotate-180" : ""}`}
        />
      </button>
      {toggleShow[0] && (
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-end w-full">
          <div className="sm:w-[25%] ml-14 sm:mx-10">
            <Image
              src="/rounded-chart.png"
              alt="chart"
              width={300}
              height={300}
            />
          </div>
          <div className="sm:w-[75%]">
            <AgeTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeReport;
