import Message from "../components/message";
import Icon from "@/modules/common/icons";
import Selector from "../components/selector";
import Image from "next/image";
import AdminData from "../components/admin-data";
import StatsTable from "../components/stats-table";
import NewRequestTable from "../components/new-request-table";
import UserBox from "@/modules/common/user";

const AdminDashboardTemplate = () => {
  const USERS = [
    {
      name: "Robert Miller",
      status: "New",
      child: "1",
      date: "02/12/2024, 11:21 am",
    },
    {
      name: "Robert Miller",
      status: "New",
      child: "1",
      date: "02/12/2024, 11:21 am",
    },
  ];

  return (
    <div className="page">
      <Message number={2} />

      <div className="flex flex-col items-start gap-6 w-full">
        <div className="title">
          <Icon svg="/icons/Requests.svg" />
          <h2>New Requests</h2>
          <span className="py-[3px] px-[9px] bg-primary text-white text-sm">
            2
          </span>
        </div>

        <NewRequestTable />

        <div className="w-full flex flex-col gap-2 sm:hidden">
          {USERS.map((user, index) => (
            <UserBox
              key={index}
              name={user.name}
              status={user.status}
              child={user.child}
              date={user.date}
            />
          ))}
        </div>

        <div className="flex w-full justify-end">
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 border border-neutral-300 px-4 py-2 hover:border-neutral-400">
              <Icon svg="/icons/AddCircle.svg" width={16} />
              <span className="text-sm font-semibold">Add request</span>
            </button>
            <button className="flex items-center gap-2 border border-neutral-300 px-4 py-2 hover:border-neutral-400">
              <Icon svg="/icons/ArrowRight.svg" width={16} />
              <span className="text-sm font-semibold">Go to all requests</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10 sm:gap-6 border-t border-neutral-300 w-full pt-6">
          <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between sm:items-center">
            <div className="title">
              <Icon svg="/icons/Stats.svg" />
              <h2>Admin Stats</h2>
              <h2 className="text-neutral-500">My Stats</h2>
            </div>
            <Selector />
          </div>
          <div className="flex items-center justify-center w-full">
            <Image src="/chart.png" alt="chart" width={1300} height={500} />
          </div>

          <AdminData />
          <StatsTable />

          <div className="flex sm:hidden flex-col gap-2">
            <div className="flex flex-col gap-2 border border-neutral-300 p-3">
              <h3 className="font-bold text-base">Life Church - South OKC</h3>
              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-2">
                  <p className="font-bold">2</p>
                  <p>Volunteers</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">9</p>
                  <p>Items Sent</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">2</p>
                  <p>Items Sent</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 border border-neutral-300 p-3">
              <h3 className="font-bold text-base">Life Church - South OKC</h3>
              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-2">
                  <p className="font-bold">2</p>
                  <p>Volunteers</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">9</p>
                  <p>Items Sent</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">2</p>
                  <p>Items Sent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardTemplate;
