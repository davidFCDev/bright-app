import { ADMIN_STATS } from "@/constants";
import Image from "next/image";
import React from "react";

const AdminData = () => {
  return (
    <div className="w-full relative grid grid-cols-2 sm:flex items-start sm:items-center justify-between border border-neutral-300">
      <Image
        src="/ActiveDot.png"
        alt="chart"
        width={20}
        height={20}
        className="absolute top-2 left-2 hidden sm:block"
      />
      {ADMIN_STATS.map((stat, index) => (
        <div key={index} className="flex items-center gap-2 sm:gap-6 p-2 sm:p-7 w-full">
          <span>{stat.icon}</span>
          <div className="flex flex-col gap-2 items-start">
            <p className="flex items-center text-xl sm:text-2xl font-semibold gap-3">
              {stat.title}{" "}
              <span
                className={`${
                  stat.status ? "bg-green-600" : "bg-red-600"
                } text-xs sm:text-sm text-white px-2 py-1 rounded-sm`}
              >
                {stat.percent}%
              </span>
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-neutral-800 font-semibold">
                {stat.subtitle}
              </p>
              <p className="text-xs text-neutral-600">{stat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminData;
