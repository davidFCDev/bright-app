"use client";
import { DELIVERY_TABLE } from "@/constants";
import Icon from "@/modules/common/icons";
import DeliveryOptions from "../delivery-options";
import { useInterfaceContext } from "@/lib/context/interface-context";
import { useRouter } from "next/navigation";

const DeliveryTable = () => {
  const router = useRouter();
  const { selectedRow, toggleOptions } = useInterfaceContext();

  const handleShowDetails = (id: number) => {
    router.push(`/menu/delivery/${id}`);
  };

  return (
    <div className="w-full hidden sm:block">
      <table className="w-full items-start text-xs">
        <thead className="text-left bg-secondary text-terciary">
          <tr>
            <th className="px-5 py-3 flex items-center gap-5">
              <input type="checkbox" className="scale-125" />
              <span>Status</span>
            </th>
            <th className="px-5 py-3">Organization</th>
            <th className="px-5 py-3">Location</th>
            <th className="px-5 py-3">Address</th>
            <th className="px-5 py-3">Volunteers #</th>
            <th className="px-5 py-3"></th>
          </tr>
        </thead>
        <tbody className="font-semibold text-neutral-600">
          {DELIVERY_TABLE.map((item) => (
            <tr
              onClick={() => handleShowDetails(item.id)}
              key={item.id}
              className="bg-neutral-50 border border-neutral-300 hover:cursor-pointer hover:bg-neutral-200"
            >
              <td className="px-5 py-4 flex gap-5 ">
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
              <td className="px-5 py-4">{item.organization}</td>
              <td className="px-5 py-4">{item.location}</td>
              <td className="px-5 py-4">
                <div className="flex flex-col">
                  <span>{item.address[0]}</span>
                  <span>{item.address[1]}</span>
                </div>
              </td>
              <td className="px-5 py-4">{item.volunteers}</td>
              <td className="px-5 py-4 relative">
                <button onClick={() => toggleOptions(item.id)}>
                  <Icon svg="/icons/MoreOptions.svg" props="rotate-90" />
                </button>
                {selectedRow === item.id && (
                  <DeliveryOptions status={item.status} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryTable;
