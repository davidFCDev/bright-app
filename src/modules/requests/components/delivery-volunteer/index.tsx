import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";

interface DeliveryProps {
  name: string;
  location: string;
  distance: string;
}

const DeliveryVolunteer = ({ name, location, distance }: DeliveryProps) => {
  return (
    <div className="w-full flex sm:flex-col gap-3 border border-neutral-300 px-7 py-4">
      <div className="flex flex-col gap-3 w-full justify-center sm:items-start">
        <h3 className="font-bold text-lg">Jakob Philips</h3>
        <div className="font-semibold text-sm flex flex-col gap-1">
          <p className="font-semibold">Life Church - Mustang</p>
          <div className="flex items-center gap-1">
            <Icon svg="/icons/Distance.svg" width={12} />
            <span className="text-neutral-700">8.67 miles from location</span>
          </div>
        </div>
        <OutButton
          text="Choose Volunteer"
          icon={<Icon svg="/icons/Complete.svg" width={14} />}
          props={"text-xs font-semibold hidden sm:flex"}
        />
      </div>
      <OutButton
          text="Choose"
          icon={<Icon svg="/icons/Complete.svg" width={14} />}
          props={"text-xs font-semibold sm:hidden w-32"}
        />
    </div>
  );
};

export default DeliveryVolunteer;
