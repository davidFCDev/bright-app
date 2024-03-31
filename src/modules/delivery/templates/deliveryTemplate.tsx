"use client";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";
import Search from "@/modules/common/search";
import DeliveryTable from "../components/delivery-table";
import DeliveryAdd from "../components/delivery-add";
import { useInterfaceContext } from "@/lib/context/interface-context";
import ResponsiveDeliveryTable from "../components/responsive-delivery-table";
import InputFilters from "@/modules/common/input-filters";

const DeliveryTemplate = () => {
  const { handleShowDeliveryLocationsAdd } = useInterfaceContext();

  return (
    <div className="page relative">
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Delivery.svg" />
          <h2 className="flex gap-1">
            Delivery <span className="hidden sm:block">Locations</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <OutButton
            text="Export"
            icon={<Icon svg="/icons/Download.svg" width={16} />}
            props={"text-sm font-semibold hidden sm:flex"}
          />
          <Button
            text="+ Add Delivery Locations"
            onClick={handleShowDeliveryLocationsAdd}
          />
        </div>
      </div>

      <div className="flex flex-row-reverse sm:flex-col gap-4 w-full items-start">
        <InputFilters
          filters={["Status: All", "Organization: All", "Location: All"]}
        />
        <Search width="w-full" />
      </div>

      <DeliveryTable />
      <ResponsiveDeliveryTable />

      <DeliveryAdd />
    </div>
  );
};

export default DeliveryTemplate;
