import { styles } from "@/styles";
import React from "react";
import { CgNotes } from "react-icons/cg";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Table from "../components/table";
import { RiPieChart2Fill } from "react-icons/ri";
import Image from "next/image";

const DashboardTemplate = () => {
  return (
    <div className={`${styles.page} flex flex-col gap-8`}>
      <div className="w-full bg-terciary p-4 flex items-center">
        <h2 className="font-semibold text-neutral-700">
          ⭐ You have 2 new requests! Lorem ipsum dolor sit amet.{" "}
          <span className="underline">Go to all Requests</span>
        </h2>
        <HiMiniArrowSmallRight />
      </div>

      <div className="flex flex-col items-start gap-6 w-full">
        <div className={`${styles.title}`}>
          <CgNotes />
          <h2>New Requests</h2>
          <span className="py-[3px] px-[9px] bg-primary text-white text-sm">
            2
          </span>
        </div>

        <Table />

        <div className="flex w-full justify-end">
          <button className="flex items-center gap-2 border border-neutral-300 px-4 py-2 hover:border-neutral-400">
            <div className="text-xl">
              <HiMiniArrowSmallRight />
            </div>
            <span className="text-sm font-semibold">Go to my requests</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 border-t border-neutral-300 w-full pt-6">
          <div className="flex justify-between items-center">
            <div className={`${styles.title}`}>
              <RiPieChart2Fill />
              <h2>My Stats</h2>
              <h2 className="text-neutral-500">Bright Sky Stats</h2>
            </div>
            <div className="flex items-center justify-center text-sm gap-4">
              <p className="text-neutral-500">Show</p>
              <select className="border border-neutral-300 px-2 py-1 focus:border-neutral-400">
                <option value="1" className="font-semibold">Last 12 months</option>
              </select>
            </div>
          </div>

          <Image src="/chart.png" alt="chart" width={1300} height={500} />
          <div className="w-full flex border-neutral-300 bg-neutral-100">

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
