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
    <div className="flex flex-col gap-3 border border-neutral-300 px-7 py-4">
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
        props={"text-xs font-semibold"}
      />
    </div>
  );
};

export default DeliveryVolunteer;
