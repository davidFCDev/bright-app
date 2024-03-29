"use client";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import React from "react";
import Search from "@/modules/common/search";
import DeliveryDetailFilters from "../components/detail-filters";
import Line from "@/modules/common/line";
import VolunteersTable from "../components/volunteers-table";
import { useInterfaceContext } from "@/lib/context/interface-context";
import DeliveryAddPerson from "../components/delivery-addperson";
import Details from "../components/details";
import Location from "../components/location";

const DeliveryDetailsTemplate = () => {
  const { handleShowAdd, delivery } = useInterfaceContext();

  return (
    <div className="page relative">
      <Location />

      <Line />

      <Details delivery={delivery} />

      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Delivery.svg" />
          <h2>Delivery Volunteers</h2>
        </div>

        <Button text="+ Add Delivery Volunteer" onClick={handleShowAdd} />
      </div>
      <div className="flex flex-col gap-4 w-full items-start">
        <DeliveryDetailFilters />
        <Search width="w-full" />
      </div>

      <VolunteersTable />
      <DeliveryAddPerson />
    </div>
  );
};

export default DeliveryDetailsTemplate;
