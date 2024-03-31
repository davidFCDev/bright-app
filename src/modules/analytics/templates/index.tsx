"use client";
import Icon from "@/modules/common/icons";
import React, { useState } from "react";
import Resume from "../components/resume";
import Image from "next/image";
import Line from "@/modules/common/line";
import AgeReport from "../components/age-report";
import ChildrenServed from "../components/children-served";
import OutButton from "@/modules/common/outline-button";
import Selector from "@/modules/common/selector";

const AnalyticsTemplate = () => {
  return (
    <div className="page">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Stats.svg" />
          <h2>Analytics</h2>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold">
          <OutButton
            text="Export"
            icon={<Icon svg="/icons/Download.svg" width={16} />}
            props={"text-sm font-semibold hidden sm:flex"}
          />
          <Selector text="Period" label="Last 12 months" />
        </div>
      </div>

      <Resume />

      <h2 className="text-xl font-semibold">Children Served</h2>

      <div className="flex items-center justify-center w-full">
        <Image src="/chart.png" alt="chart" width={1300} height={400} />
      </div>

      <Line />
      <AgeReport />
      <Line />
      <ChildrenServed />
      <Line />

      <div className="flex items-center gap-2">
        <Icon svg="/icons/Agencies.svg" width={18} />
        <h3 className="font-semibold">Agency Report</h3>
        <Icon svg="/icons/DropDown.svg" width={18} />
      </div>

      <Line />

      <div className="flex items-center gap-2">
        <Icon svg="/icons/Children.svg" width={18} />
        <h3 className="font-semibold">Request/Children Served Breakdown</h3>
        <Icon svg="/icons/DropDown.svg" width={18} />
      </div>

      <Line />
    </div>
  );
};

export default AnalyticsTemplate;
