import Icon from "@/modules/common/icons";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface FirstBoxProps {
  verified?: boolean;
}

const FirstBox = ({ verified }: FirstBoxProps) => {
  return (
    <div className="w-full h-full flex border border-primary p-5 items-start justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {verified && (
            <p className="flex items-center text-xs text-green-500 gap-2 font-semibold">
              <FaCircleCheck />
              <span>Information Verified</span>
            </p>
          )}
          <div className="flex items-center">
            <div className="flex items-center gap-2 font-semibold">
              <h3 className="text-xl">Robert Miller</h3>
              <p className="text-xs px-3 py-1 border border-primary text-primary bg-terciary">
                Foster Parent
              </p>
            </div>
          </div>
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
      <Icon svg="/icons/Edit.svg" />
    </div>
  );
};

export default FirstBox;
