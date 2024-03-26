import { styles } from "@/styles";
import React from "react";
import Table from "../components/table";
import Image from "next/image";
import Icon from "@/modules/common/icons";
import Message from "../components/message";
import Selector from "../components/selector";
import Data from "../components/data";

const DashboardTemplate = () => {
  return (
    <div className={`${styles.page} flex flex-col gap-8 px-10 pt-3 pb-20`}>
      <Message />

      <div className="flex flex-col items-start gap-6 w-full">
        <div className={`${styles.title}`}>
          <Icon svg="/icons/Requests.svg" />
          <h2>New Requests</h2>
          <span className="py-[3px] px-[9px] bg-primary text-white text-sm">
            2
          </span>
        </div>

        <Table />

        <div className="flex w-full justify-end">
          <button className="flex items-center gap-2 border border-neutral-300 px-4 py-2 hover:border-neutral-400">
            <Icon svg="/icons/ArrowRight.svg" width={16} />
            <span className="text-sm font-semibold">Go to my requests</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 border-t border-neutral-300 w-full pt-6">
          <div className="flex justify-between items-center">
            <div className={`${styles.title}`}>
              <Icon svg="/icons/Stats.svg" />
              <h2>My Stats</h2>
              <h2 className="text-neutral-500">Bright Sky Stats</h2>
            </div>
            <Selector />
          </div>
          <div className="flex items-center justify-center w-full">
            <Image src="/chart.png" alt="chart" width={1300} height={500} />
          </div>

          <Data />
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
