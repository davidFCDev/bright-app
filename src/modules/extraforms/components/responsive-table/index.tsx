import React from "react";
import UserBoxExtraForm from "../user-form";

const list = [
  {
    name: "Robert Miller",
    status: "Sent",
    mail: "robertm@gmail.com",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Robert Miller",
    status: "Used",
    mail: "robertm@gmail.com",
    date: "02/12/2024, 11:21 am",
    ready: "Request Ready (02/12/2024, 11:21 am)",
  },
  {
    name: "Robert Miller",
    status: "Sent",
    mail: "robertm@gmail.com",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Robert Miller",
    status: "Sent",
    mail: "robertm@gmail.com",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Robert Miller",
    status: "Sent",
    mail: "robertm@gmail.com",
    date: "02/12/2024, 11:21 am",
  },
];

const ResponsiveTable = () => {
  return (
    <div className="flex sm:hidden flex-col w-full">
      {list.map((item, index) => (
        <UserBoxExtraForm
          key={index}
          name={item.name}
          status={item.status}
          mail={item.mail}
          date={item.date}
          ready={item.ready}
        />
      ))}
    </div>
  );
};

export default ResponsiveTable;
