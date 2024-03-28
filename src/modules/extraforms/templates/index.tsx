"use client";
import Icon from "@/modules/common/icons";
import Search from "@/modules/common/search";
import React, { useState } from "react";
import ExtraFormsTable from "../components/extraforms-table";
import Button from "@/modules/common/button";
import Filters from "../../common/filters";
import ExtraFormAdd from "../components/extraform-add";

const ExtraformsTemplate = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="page relative">
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/ExtraRequests.svg" />
          <h2>Requests</h2>
        </div>
        <Button text="+ Send Form" onClick={handleShowForm} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Filters />
        <Search />
      </div>
      <ExtraFormsTable />

      <ExtraFormAdd showForm={showForm} handleShowForm={handleShowForm}/>
    </div>
  );
};

export default ExtraformsTemplate;
