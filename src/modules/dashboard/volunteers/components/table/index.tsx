import React from "react";
import { NEW_REQUESTS } from "@/constants";

const Table = () => {
  return (
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
        {NEW_REQUESTS.map((request) => (
          <tr key={request.name} className="bg-neutral-50 border border-neutral-300">
            <td className="px-5 py-4">{request.date}</td>
            <td className="px-5 py-4 flex"><div className="px-2 py-1 bg-terciary border border-primary text-primary">{request.status}</div></td>
            <td className="px-5 py-4">{request.assigned}</td>
            <td className="px-5 py-4">{request.name}</td>
            <td className="px-5 py-4">{request.children}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
