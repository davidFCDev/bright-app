import { USERS_TABLE } from "@/constants";
import Icon from "@/modules/common/icons";
import OptionsButton from "../options-button";
import { useUsersContext } from "@/lib/context/users-context";

const UsersTable = () => {
  const { selectedRow, toggleOptions } = useUsersContext();

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
          <th className="px-5 py-3">Phone</th>
          <th className="px-5 py-3">User Type</th>
        </tr>
      </thead>
      <tbody className="font-semibold text-neutral-600">
        {USERS_TABLE.map((item, index) => (
          <tr key={index} className="bg-neutral-50 border border-neutral-300">
            <td className="px-5 py-4 flex gap-5">
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
            <td className="px-5 py-4">{item.mail}</td>
            <td className="px-5 py-4">{item.phone}</td>
            <td className="px-5 py-4 flex items-center justify-between relative">
              {item.user_type}
              <button onClick={() => toggleOptions(index)}>
                <Icon svg="/icons/MoreOptions.svg" props="rotate-90" />
              </button>
              {selectedRow === index && <OptionsButton status={item.status} />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
