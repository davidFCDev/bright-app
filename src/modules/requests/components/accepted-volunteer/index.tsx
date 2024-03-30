import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";

const AcceptedVolunteer = () => {
  return (
    <div className="flex flex-col w-full gap-6 text-sm border border-neutral-300 p-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-32">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <Icon svg="/icons/Users.svg" width={18} />
            <p className="font-semibold text-base">Delivery Person</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>Rodney Ladd</p>
            <p>Life Church - South OKC</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <Icon svg="/icons/Phone.svg" width={18} />
            <p className="font-semibold text-base">Contact Info</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>(555) 986-0499</p>
            <p>Life Church - South OKC</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <Icon svg="/icons/Zips.svg" width={18} />
            <p className="font-semibold text-base">Shipping Address</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>1052 E State Highway 152</p>
            <p>Mustang, OK 73064</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <OutButton
          icon={<Icon svg="/icons/Resend.svg" width={16} />}
          text="Change Volunteer"
          props={"text-xs font-semibold"}
        />
        <OutButton
          icon={<Icon svg="/icons/Edit.svg" width={16} />}
          text="Edit Contact Details"
          props={"text-xs font-semibold"}
        />
      </div>
    </div>
  );
};

export default AcceptedVolunteer;
