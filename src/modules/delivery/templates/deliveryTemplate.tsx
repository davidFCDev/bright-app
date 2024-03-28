"use client";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";
import DeliveryFilters from "../components/filters";
import Search from "@/modules/common/search";
import DeliveryTable from "../components/delivery-table";
import DeliveryAdd from "../components/delivery-add";
import { useInterfaceContext } from "@/lib/context/interface-context";

const DeliveryTemplate = () => {
  const { handleShowAdd } = useInterfaceContext();

  return (
    <div className="page relative">
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Delivery.svg" />
          <h2>Delivery Locations</h2>
        </div>
        <div className="flex items-center gap-4">
          <OutButton
            text="Export"
            icon={<Icon svg="/icons/Download.svg" width={16} />}
            props={"text-sm font-semibold"}
          />
          <Button text="+ Add Delivery Locations" onClick={handleShowAdd} />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <DeliveryFilters />
        <Search />
      </div>
      <DeliveryTable />
      <DeliveryAdd />
    </div>
  );
};

export default DeliveryTemplate;
