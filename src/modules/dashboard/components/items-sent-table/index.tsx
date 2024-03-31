import { ITEMS_SENT_TABLE } from "@/constants";
import Icon from "@/modules/common/icons";

const ItemsSentTable = () => {
  return (
    <div className="hidden sm:block w-full">
      <table className="w-full items-start text-xs">
        <thead className="text-left bg-secondary text-terciary">
          <tr>
            <th className="px-5 py-3">
              <span>Status</span>
            </th>
            <th className="px-5 py-3">Item</th>
            <th className="px-5 py-3">Qty</th>
            <th className="px-5 py-3">Price</th>
            <th className="px-5 py-3">Bought From</th>
            <th className="px-5 py-3">Date Sent</th>
            <th className="px-5 py-3">Tracking #</th>
            <th className="px-5 py-3"></th>
          </tr>
        </thead>
        <tbody className="font-semibold text-neutral-600">
          {ITEMS_SENT_TABLE.map((item, index) => (
            <tr key={index} className="bg-neutral-50 border border-neutral-300">
              <td className="px-5 py-4 flex">
                <div
                  className={`border px-2 py-1 ${
                    item.status === "Delivered"
                      ? "text-green-500 border-green-500 bg-green-100"
                      : "text-violet-500 border-violet-500"
                  }`}
                >
                  {item.status}
                </div>
              </td>
              <td className="px-5 py-4">{item.item}</td>
              <td className="px-5 py-4">{item.qty}</td>
              <td className="px-5 py-4">{item.price}</td>
              <td className="px-5 py-4">{item.bought_from}</td>
              <td className="px-5 py-4">{item.date_sent}</td>
              <td className="px-5 py-4 flex items-center gap-1">
                {item.tracking}
                <Icon svg="/icons/Copy.svg" width={16} />
              </td>
              <td className="px-5 py-4">
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

export default ItemsSentTable;
