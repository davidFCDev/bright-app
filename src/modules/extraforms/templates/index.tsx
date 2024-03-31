"use client";
import Icon from "@/modules/common/icons";
import Search from "@/modules/common/search";
import React, { useState } from "react";
import ExtraFormsTable from "../components/extraforms-table";
import Button from "@/modules/common/button";
import ExtraFormAdd from "../components/extraform-add";
import { useInterfaceContext } from "@/lib/context/interface-context";
import ResponsiveTable from "../components/responsive-table";
import InputFilters from "@/modules/common/input-filters";

const ExtraformsTemplate = () => {
  const { handleShowSendForm } = useInterfaceContext();

  return (
    <div className="page relative">
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/ExtraRequests.svg" />
          <h2>Extra Forms</h2>
        </div>
        <Button text="+ Send Form" onClick={() => handleShowSendForm()} />
      </div>

      <div className="flex flex-row-reverse sm:flex-col gap-4 w-full items-start">
        <InputFilters filters={["Status: All", "Date: All"]} />
        <Search width="w-full" />
      </div>
      
      <ExtraFormsTable />

      <ResponsiveTable />

      <ExtraFormAdd />
    </div>
  );
};

export default ExtraformsTemplate;
