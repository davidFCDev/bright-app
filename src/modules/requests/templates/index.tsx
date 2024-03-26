import Icon from "@/modules/common/icons";
import Message from "@/modules/dashboard/components/message";
import React from "react";

const RequestsTemplate = () => {
  return (
    <div className="page">
      <Message number={1}/>
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Requests.svg" />
          <h2>Requests</h2>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-[2px] hover:bg-secondary">
          <span>+ Add Request</span>
        </button>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center gap-3">
            <Icon svg="/icons/Filter.svg" />
            <select className="border border-gray-300 rounded-[2px] px-3 py-1 text-xs font-semibold">
                <option value="All">Status: All</option>
            </select>
            <select className="border border-gray-300 rounded-[2px] px-3 py-1 text-xs font-semibold">
                <option value="All">Assigned Volunteer: All</option>
            </select>
            <select className="border border-gray-300 rounded-[2px] px-3 py-1 text-xs font-semibold">
                <option value="All">Date: All</option>
            </select>
        </div>
        <div className="flex items-center w-full p-3 gap-2 bg-light border border-neutral-300">
            <Icon svg="/icons/Search.svg" width={16}/>
            <input type="text" placeholder="Type to search..." className="w-full text-xs bg-light placeholder:font-semibold outline-none focus:outline-none" />
        </div>
      </div>
    </div>
  );
};

export default RequestsTemplate;
