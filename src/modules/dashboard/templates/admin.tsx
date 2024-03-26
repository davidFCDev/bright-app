import Message from "../components/message";
import Icon from "@/modules/common/icons";
import RequestTable from "../components/request-table";
import Selector from "../components/selector";
import Image from "next/image";
import AdminData from "../components/admin-data";
import StatsTable from "../components/stats-table";

const AdminDashboardTemplate = () => {
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

        <RequestTable />

        <div className="flex w-full justify-end">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 border border-neutral-300 px-4 py-2 hover:border-neutral-400">
              <Icon svg="/icons/AddCircle.svg" width={16} />
              <span className="text-sm font-semibold">Add request</span>
            </button>
            <button className="flex items-center gap-2 border border-neutral-300 px-4 py-2 hover:border-neutral-400">
              <Icon svg="/icons/ArrowRight.svg" width={16} />
              <span className="text-sm font-semibold">Go to all requests</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-neutral-300 w-full pt-6">
          <div className="flex justify-between items-center">
            <div className="title">
              <Icon svg="/icons/Stats.svg" />
              <h2>Admin Stats</h2>
              <h2 className="text-neutral-500">Bright Sky Stats</h2>
            </div>
            <Selector />
          </div>
          <div className="flex items-center justify-center w-full">
            <Image src="/chart.png" alt="chart" width={1300} height={500} />
          </div>

          <AdminData />
          <StatsTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardTemplate;
