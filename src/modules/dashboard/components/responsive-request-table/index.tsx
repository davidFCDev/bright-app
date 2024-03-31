import UserBox from "@/modules/common/user";
import React from "react";

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

const ResponsiveRequestTable = () => {
  
  return (
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
  );
};

export default ResponsiveRequestTable;
