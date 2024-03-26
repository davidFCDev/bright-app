import { MY_STATS } from "@/constants";
import Image from "next/image";
import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const VolunteerData = () => {
  return (
    <div className="w-full relative flex items-center justify-between border border-neutral-300">
      <Image
        src="/ActiveDot.png"
        alt="chart"
        width={20}
        height={20}
        className="absolute top-2 left-2"
      />
      {MY_STATS.map((stat, index) => (
        <div key={index} className="flex items-center gap-6 p-6 w-full">
          {stat.icon}
          <div className="flex flex-col gap-2 items-start">
            <p className="flex items-center text-2xl font-semibold">
              {stat.title}{" "}
              <span
                className={`${
                  stat.status ? "text-green-600" : "text-red-600"
                } text-lg`}
              >
                {stat.status ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
              </span>
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-neutral-600 font-semibold">{stat.subtitle}</p>
              <p className="text-xs text-neutral-600">{stat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VolunteerData;
