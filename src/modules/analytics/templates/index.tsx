import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";
import Resume from "../components/resume";
import Image from "next/image";
import AgeTable from "../components/age-table";

const AnalyticsTemplate = () => {
  return (
    <div className="page">
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Stats.svg" />
          <h2>Analytics</h2>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold">
          <OutButton
            text="Export"
            icon={<Icon svg="/icons/Download.svg" width={16} />}
            props={"text-sm font-semibold"}
          />
          <p className="text-neutral-400">Period</p>
          <select className="border border-neutral-300 px-2 py-1">
            <option value="week">Last 12 months</option>
          </select>
        </div>
      </div>

      <Resume />

      <h2 className="text-xl font-semibold">Children Served</h2>

      <div className="flex items-center justify-center w-full">
        <Image src="/chart.png" alt="chart" width={1300} height={400} />
      </div>

      <hr className="border border-neutral-200 w-full" />

      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-2">
          <Icon svg="/icons/Age.svg" width={16}/>
          <h3 className="font-semibold">Age Report</h3>
          <Icon svg="/icons/DropDown.svg" width={16} props="rotate-180"/>
        </div>
        <div>
          <Image src="/rounded-chart.png" alt="chart" width={250} height={250} />
          <AgeTable />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTemplate;
