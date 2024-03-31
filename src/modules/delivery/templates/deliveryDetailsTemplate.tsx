"use client";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import React from "react";
import Search from "@/modules/common/search";
import Line from "@/modules/common/line";
import VolunteersTable from "../components/volunteers-table";
import { useInterfaceContext } from "@/lib/context/interface-context";
import DeliveryAddPerson from "../components/delivery-addperson";
import Details from "../components/details";
import Location from "../components/location";
import ResponsiveVolunteerTable from "../components/responsive-volunteer-table";
import InputFilters from "@/modules/common/input-filters";

const DeliveryDetailsTemplate = () => {
  const { handleShowDeliveryVolunteersAdd, delivery } = useInterfaceContext();

  return (
    <div className="page relative">
      <Location />

      <Line />

      <Details delivery={delivery} />

      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Delivery.svg" props="hidden sm:block" />
          <h2>Delivery Volunteers</h2>
        </div>

        <Button
          text="+ Add Delivery Volunteer"
          onClick={handleShowDeliveryVolunteersAdd}
          props={"hidden sm:flex"}
        />

        <Button
          text="+ Add"
          onClick={handleShowDeliveryVolunteersAdd}
          props={"sm:hidden"}
        />
      </div>
      <div className="flex flex-row-reverse sm:flex-col gap-4 w-full items-start">
        <InputFilters filters={["Status: All"]} />
        <Search width="w-full" />
      </div>

      <VolunteersTable />
      <ResponsiveVolunteerTable />

      <DeliveryAddPerson />
    </div>
  );
};

export default DeliveryDetailsTemplate;
