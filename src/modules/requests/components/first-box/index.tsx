import Icon from "@/modules/common/icons";
import React from "react";

const FirstBox = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 border border-primary p-5 items-start">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 font-semibold">
          <h3 className="text-xl">Robert Miller</h3>
          <p className="text-xs px-3 py-1 border border-primary text-primary bg-terciary">
            Foster Parent
          </p>
        </div>
        <Icon svg="/icons/Edit.svg" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold flex items-center gap-1">
          <Icon svg="/icons/Mail.svg" width={16} />
          <span>Email</span>
        </p>
        <p className=" text-xs">robmiller039@webmail.com</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold flex items-center gap-1">
          <Icon svg="/icons/Phone.svg" width={16} />
          <span>Phone</span>
        </p>
        <p className=" text-xs">(555) 986-0499</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold flex items-center gap-1">
          <Icon svg="/icons/Zips.svg" width={16} />
          <span>Shipping Address</span>
        </p>
        <p className=" text-xs">1052 E State Highway 152</p>
        <p className=" text-xs">Mustang, OK 73064</p>
      </div>
    </div>
  );
};

export default FirstBox;
