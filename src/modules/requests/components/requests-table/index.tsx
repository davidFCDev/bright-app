import { REQUESTS_TABLE } from "@/constants";
import CancelButton from "@/modules/common/cancel-button";
import Icon from "@/modules/common/icons";
import React, { useState } from "react";

const RequestsTable = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const toggleCancelButton = (index: number) => {
    setSelectedRow(selectedRow === index ? null : index);
  };

  return (
    <table className="w-full items-start text-xs">
      <thead className="text-left bg-secondary text-terciary">
        <tr>
          <th className="px-5 py-3 flex items-center gap-5">
            <input type="checkbox" className="scale-125" />
            <span>Status</span>
          </th>
          <th className="px-5 py-3">Assigned</th>
          <th className="px-5 py-3">Name</th>
          <th className="px-5 py-3"># of Children</th>
          <th className="px-5 py-3">Date</th>
        </tr>
      </thead>
      <tbody className="font-semibold text-neutral-600">
        {REQUESTS_TABLE.map((request, index) => (
          <tr key={index} className="bg-neutral-50 border border-neutral-300">
            <td className="px-5 py-4 flex gap-5">
              <input type="checkbox" className="scale-125" />
              <div
                className={`border px-2 py-1 ${
                  request.status === "New" ? "text-primary border-primary bg-terciary" : "text-brown border-lightBrown"
                }`}
              >
                {request.status}
              </div>
            </td>
            <td className="px-5 py-4">{request.assigned}</td>
            <td className="px-5 py-4">{request.name}</td>
            <td className="px-5 py-4">{request.children}</td>
            <td className="px-5 py-4 flex items-center justify-between relative">
              {request.date}
              <button
                className="rotate-90"
                onClick={() => toggleCancelButton(index)}
              >
                <Icon svg="/icons/MoreOptions.svg" />
              </button>
              {selectedRow === index && <CancelButton />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RequestsTable;
