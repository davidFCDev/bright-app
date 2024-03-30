import Message from "../components/message";
import Icon from "@/modules/common/icons";
import NewRequestTable from "../components/new-request-table";
import Selector from "../components/selector";
import Image from "next/image";
import VolunteerData from "../components/volunteer-data";
import UserBox from "@/modules/common/user";

const DashboardTemplate = () => {
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
          <button className="flex items-center gap-2 border border-neutral-300 px-4 py-2 hover:border-neutral-400">
            <Icon svg="/icons/ArrowRight.svg" width={16} />
            <span className="text-sm font-semibold">Go to my requests</span>
          </button>
        </div>

        <div className="flex flex-col gap-8 sm:gap-6 border-t border-neutral-300 w-full pt-6">
          <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between sm:items-center">
            <div className="title">
              <Icon svg="/icons/Stats.svg" />
              <h2>My Stats</h2>
              <h2 className="text-neutral-500">Bright Sky Stats</h2>
            </div>
            <Selector />
          </div>
          <div className="flex items-center justify-center w-full">
            <Image src="/chart.png" alt="chart" width={1300} height={500} />
          </div>

          <VolunteerData />
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
