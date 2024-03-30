"use client";
import Icon from "@/modules/common/icons";
import Search from "@/modules/common/search";
import React, { useState } from "react";
import ExtraFormsTable from "../components/extraforms-table";
import Button from "@/modules/common/button";
import Filters from "../../common/filters";
import ExtraFormAdd from "../components/extraform-add";
import { useInterfaceContext } from "@/lib/context/interface-context";

const ExtraformsTemplate = () => {
  const { handleShowSendForm } = useInterfaceContext();

  return (
    <div className="page relative">
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/ExtraRequests.svg" />
          <h2>Requests</h2>
        </div>
        <Button text="+ Send Form" onClick={() => handleShowSendForm()} />
      </div>
      <div className="flex flex-col gap-4 w-full items-start">
        <Filters />
        <Search width="w-full" />
      </div>
      <ExtraFormsTable />

      <ExtraFormAdd />
    </div>
  );
};

export default ExtraformsTemplate;
