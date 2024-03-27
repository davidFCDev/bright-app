import { AGE_TABLE } from "@/constants";
import React from "react";

const AgeTable = () => {
  return (
    <table className="w-full items-start text-xs">
      <thead className="text-left bg-secondary text-terciary">
        <tr>
          <th className="px-5 py-3 flex items-center gap-5">
            <input type="checkbox" className="scale-125" />
            <span>Status</span>
          </th>
          <th className="px-5 py-3">Age</th>
          <th className="px-5 py-3">Children Served</th>
          <th className="px-5 py-3">% Children Served</th>
        </tr>
      </thead>
      <tbody className="font-semibold text-neutral-600">
        {AGE_TABLE.map((item, index) => (
          <tr key={index} className="bg-neutral-50 border border-neutral-300">
            <td className="px-5 py-4">{item.age}</td>
            <td className="px-5 py-4">{item.children_served}</td>
            <td className="px-5 py-4">{item.percent} %</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AgeTable;
