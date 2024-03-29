import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";

const SecondBox = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 border border-brown p-5 items-start">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 font-semibold">
          <h3 className="text-xl">Maren George</h3>
          <p className="text-xs px-3 py-1 border border-brown text-brown">
            Caseworker - Angels
          </p>
        </div>
        <Icon svg="/icons/Edit.svg" />
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
  );
};

export default SecondBox;
