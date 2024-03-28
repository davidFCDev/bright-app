"use client";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import React from "react";
import Search from "@/modules/common/search";
import DeliveryDetailFilters from "../components/detail-filters";
import Line from "@/modules/common/line";
import { useParams } from "next/navigation";
import { DELIVERY_TABLE } from "@/constants";
import { IoMdArrowDropdown } from "react-icons/io";
import VolunteersTable from "../components/volunteers-table";
import { useInterfaceContext } from "@/lib/context/interface-context";

const DeliveryDetailsTemplate = () => {
  const { id } = useParams() || { id: undefined };
  const delivery = DELIVERY_TABLE.find((item) => item.id === Number(id));
  const { handleShowAdd } = useInterfaceContext();

  return (
    <div className="page relative">
      <div className="flex items-center gap-3 text-xs font-semibold">
        <Icon svg="/icons/ArrowRight.svg" props="rotate-180" />
        <p>Delivery Locations</p>
        <span>/</span>
        <p className="text-neutral-500">
          {delivery?.organization} ({delivery?.location})
        </p>
      </div>

      <Line />

      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 font-semibold">
            <h2 className="text-2xl">{delivery?.organization}</h2>
            <div className="flex items-center px-4 py-2 bg-secondary text-white rounde-[1px] text-base">
              {delivery?.location}
              <IoMdArrowDropdown className="text-white" />
            </div>
          </div>
          <Icon svg="/icons/Edit.svg" width={18} />
        </div>

        <div className="flex items-start gap-32">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-semibold">
              <Icon svg="/icons/Delivery.svg" width={16} />
              Address
            </p>
            <div className="flex flex-col">
              <p className="text-neutral-800 text-sm">{delivery?.address[0]}</p>
              <p className="text-neutral-800 text-sm">{delivery?.address[1]}</p>
            </div>
            <div className="flex items-center w-full justify-between">
              <span className="border border-neutral-200 px-4 py-1 text-xs">
                {delivery?.lat}
              </span>
              <span className="border border-neutral-200 px-4 py-1 text-xs">
                {delivery?.long}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-semibold">
              <Icon svg="/icons/Distance.svg" width={16} />
              Max Distance
            </p>
            <p className="text-neutral-800 text-sm">
              {delivery?.max_distance} miles
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-semibold">
              <Icon svg="/icons/Zips.svg" width={16} />
              Zips
            </p>
            <p className="text-neutral-800 text-sm">
              {delivery?.zips[0]}, {delivery?.zips[1]}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Delivery.svg" />
          <h2>Delivery Volunteers</h2>
        </div>

        <Button text="+ Add Delivery Volunteer" />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <DeliveryDetailFilters />
        <Search />
      </div>

      <VolunteersTable />
    </div>
  );
};

export default DeliveryDetailsTemplate;
