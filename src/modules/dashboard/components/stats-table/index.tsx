import React from "react";
import { STATS_TABLE } from "@/constants";

const StatsTable = () => {
  return (
    <table className="w-full items-start text-xs">
      <thead className="text-left bg-secondary text-terciary">
        <tr>
          <th className="px-5 py-3">Location</th>
          <th className="px-5 py-3">Volunteers</th>
          <th className="px-5 py-3">Items Sent</th>
          <th className="px-5 py-3">Children Served</th>
        </tr>
      </thead>
      <tbody className="font-semibold text-neutral-600">
        {STATS_TABLE.map((request, index) => (
          <tr key={index} className="bg-neutral-50 border border-neutral-300">
            <td className="px-5 py-4">{request.location}</td>
            <td className="px-5 py-4">{request.volunteers}</td>
            <td className="px-5 py-4">{request.items_sent}</td>
            <td className="px-5 py-4">{request.children_served}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatsTable;
