"use client";
import Icon from "@/modules/common/icons";
import Search from "@/modules/common/search";
import React, { useState } from "react";
import ExtraFormsTable from "../components/extraforms-table";
import Button from "@/modules/common/button";
import Filters from "../../common/filters";
import ExtraFormAdd from "../components/extraform-add";
import { useInterfaceContext } from "@/lib/context/interface-context";
import ResponsiveTable from "../components/responsive-table";

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
      <div className="flex flex-col gap-4 w-full items-start">
        <div className="hidden sm:block">
          <Filters />
        </div>

        <div className="flex items-center gap-4 w-full">
          <Search width="w-full" />
          <div className="sm:hidden">
            <Filters />
          </div>
        </div>
      </div>
      <ExtraFormsTable />

      <ResponsiveTable />

      <ExtraFormAdd />
    </div>
  );
};

export default ExtraformsTemplate;
