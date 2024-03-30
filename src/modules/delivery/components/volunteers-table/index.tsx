"use client";
import { VOLUNTEERS_TABLE } from "@/constants";
import Icon from "@/modules/common/icons";

const VolunteersTable = () => {
  return (
    <div className="hidden sm:block w-full">
      <table className="w-full items-start text-xs">
        <thead className="text-left bg-secondary text-terciary">
          <tr>
            <th className="px-5 py-3 flex items-center gap-5">
              <input type="checkbox" className="scale-125" />
              <span>Status</span>
            </th>
            <th className="px-5 py-3">Name</th>
            <th className="px-5 py-3">Email</th>
            <th className="px-5 py-3">Phone</th>
            <th className="px-5 py-3">Address</th>
          </tr>
        </thead>
        <tbody className="font-semibold text-neutral-600">
          {VOLUNTEERS_TABLE.map((item, index) => (
            <tr
              key={index}
              className="bg-neutral-50 border border-neutral-300 hover:cursor-pointer hover:bg-neutral-200 items-center"
            >
              <td className="px-5 py-4 flex gap-5 items-center">
                <input type="checkbox" className="scale-125" />
                <div
                  className={`border px-2 py-1 ${
                    item.status === "Active"
                      ? "text-primary border-primary bg-terciary"
                      : "text-violet-500 border-violet-500"
                  }`}
                >
                  {item.status}
                </div>
              </td>
              <td className="px-5 py-4">{item.name}</td>
              <td className="px-5 py-4">{item.email}</td>
              <td className="px-5 py-4">{item.phone}</td>
              <td className="px-5 py-4 flex items-center justify-between relative">
                <div className="flex flex-col">
                  <span>{item.address[0]}</span>
                  <span>{item.address[1]}</span>
                </div>
                <button>
                  <Icon svg="/icons/MoreOptions.svg" props="rotate-90" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteersTable;
