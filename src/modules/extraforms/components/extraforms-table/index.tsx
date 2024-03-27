"use client";
import { EXTRA_FORMS_TABLE } from "@/constants";
import CancelButton from "@/modules/common/cancel-button";
import Icon from "@/modules/common/icons";
import React, { useState } from "react";

const ExtraFormsTable = () => {
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
        {EXTRA_FORMS_TABLE.map((item, index) => (
          <tr key={index} className="bg-neutral-50 border border-neutral-300">
            <td className="px-5 py-4 flex gap-5">
              <input type="checkbox" className="scale-125" />
              <div
                className={`border px-2 py-1 ${
                  item.status === "Used"
                    ? "text-primary border-primary bg-terciary"
                    : "text-brown border-lightBrown"
                }`}
              >
                {item.status}
              </div>
            </td>
            <td className="px-5 py-4">{item.name}</td>
            <td className="px-5 py-4">{item.mail}</td>
            <td className="px-5 py-4">{item.date_sent}</td>
            <td className="px-5 py-4 flex items-center justify-between">
              {item.request}
              <button>
                <Icon svg="/icons/Resend.svg" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExtraFormsTable;
