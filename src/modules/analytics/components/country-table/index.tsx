import { COUNTRY_TABLE } from "@/constants";
import React from "react";

const CountryTable = () => {
  const colors = [
    "bg-green-700",
    "bg-green-600",
    "bg-green-500",
    "bg-green-400",
    "bg-green-300",
    "bg-green-200",
    "bg-green-100",
  ];

  return (
    <table className="w-full items-start text-xs shadow">
      <thead className="text-left bg-secondary text-terciary">
        <tr>
          <th className="px-5 py-3">Country</th>
          <th className="px-5 py-3">Children Served</th>
          <th className="px-5 py-3">% Children Served</th>
        </tr>
      </thead>
      <tbody className="font-semibold text-neutral-600">
        {COUNTRY_TABLE.map((item, index) => (
          <tr key={index} className={`bg-neutral-50 border border-neutral-300`}>
            <td className="px-5 py-4 flex items-center gap-3">
              <div
                className={`p-1 rounded-full ${colors[index % colors.length]}`}
              />
              {item.country}
            </td>
            <td className="px-5 py-4">{item.children_served}</td>
            <td className="px-5 py-4">{item.percent} %</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CountryTable;
