"use client";
import { NEW_REQUEST_TABLE } from "@/constants";
import { useRouter } from "next/navigation";
import React from "react";

const NewRequestTable = () => {
  const router = useRouter();

  const handlePreview = (id: number) => {
    router.push(`/menu/dashboard/${id}`);
  };

  return (
    <div className="hidden sm:block w-full">
      <table className="w-full items-start text-xs">
        <thead className="text-left bg-secondary text-terciary">
          <tr>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3">Status</th>
            <th className="px-5 py-3">Assigned</th>
            <th className="px-5 py-3">Name</th>
            <th className="px-5 py-3"># of Children</th>
          </tr>
        </thead>
        <tbody className="font-semibold text-neutral-600">
          {NEW_REQUEST_TABLE.map((request, index) => (
            <tr
              onClick={() => handlePreview(1)}
              key={index}
              className="bg-neutral-50 border border-neutral-300 hover:bg-neutral-100 hover:cursor-pointer"
            >
              <td className="px-5 py-4">{request.date}</td>
              <td className="px-5 py-4">{request.status}</td>
              <td className="px-5 py-4">{request.assigned}</td>
              <td className="px-5 py-4">{request.name}</td>
              <td className="px-5 py-4">{request.children}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewRequestTable;
