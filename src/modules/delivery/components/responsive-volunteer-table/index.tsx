import React from "react";
import VolunteerBox from "../volunteer-box";

const list = [
  {
    name: "Rayna Septimus",
    status: "Active",
    address: "1052 E State Highway 152",
    delivery: "Mustang, OK 73064",
    mail: "kiannab@gmail.com",
    phone: "(206) 342-8631",
  },
  {
    name: "Jaylon Vaccaro",
    status: "Active",
    address: "1052 E State Highway 152",
    delivery: "Mustang, OK 73064",
    mail: "kiannab@gmail.com",
    phone: "(206) 342-8631",
  },
];

const ResponsiveVolunteerTable = () => {
  return (
    <div className="flex sm:hidden flex-col w-full">
      {list.map((item, index) => (
        <VolunteerBox
          key={index}
          name={item.name}
          status={item.status}
          address={item.address}
          delivery={item.delivery}
          mail={item.mail}
          phone={item.phone}
        />
      ))}
    </div>
  );
};

export default ResponsiveVolunteerTable;
