import React from "react";
import UserBoxRequest from "../user-request";

const LIST = [
  {
    name: "John Doe",
    status: "Completed",
    child: 1,
    volunteer: "Jane Doe",
    date: "12/12/2021",
  },
  {
    name: "John Doe",
    status: "Completed",
    child: 2,
    volunteer: "Jane Doe",
    date: "12/12/2021",
  },
  {
    name: "John Doe",
    status: "Assigned",
    child: 2,
    volunteer: "Jane Doe",
    date: "12/12/2021",
  },
  {
    name: "John Doe",
    status: "Assigned",
    child: 1,
    volunteer: "Jane Doe",
    date: "12/12/2021",
  },
  {
    name: "John Doe",
    status: "New",
    child: 1,
    volunteer: "Jane Doe",
    date: "12/12/2021",
  },
];

const ResponsiveTable = () => {
  return (
    <div className="flex sm:hidden flex-col w-full">
      {LIST.map((item, index) => (
        <UserBoxRequest
          key={index}
          name={item.name}
          status={item.status}
          child={item.child}
          volunteer={item.volunteer}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default ResponsiveTable;
