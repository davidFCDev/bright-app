import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface SecondBoxProps {
  verified?: boolean;
}

const SecondBox = ({ verified }: SecondBoxProps) => {
  return (
    <div className="w-full h-full flex border border-brown p-5 items-start justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {verified && (
            <p className="flex items-center text-xs text-green-500 gap-2 font-semibold">
              <FaCircleCheck />
              <span>Information Verified</span>
            </p>
          )}
          <div className="flex items-center">
            <div className="flex items-center gap-2 font-semibold">
              <h3 className="text-xl">Maren George</h3>
              <p className="text-xs px-3 py-1 border border-brown text-brown">
                Caseworker - Angels
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold flex items-center gap-1">
            <Icon svg="/icons/Mail.svg" width={16} />
            <span>Email</span>
          </p>
          <p className=" text-xs">maren.george@webmail.com</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold flex items-center gap-1">
            <Icon svg="/icons/Phone.svg" width={16} />
            <span>Phone</span>
          </p>
          <p className=" text-xs">(555) 986-0499</p>
        </div>
        <OutButton
          text="Resend Verification Email"
          icon={<Icon svg="/icons/Mail.svg" width={16} />}
          props={"text-xs font-semibold"}
        />
      </div>
      <Icon svg="/icons/Edit.svg" />
    </div>
  );
};

export default SecondBox;
