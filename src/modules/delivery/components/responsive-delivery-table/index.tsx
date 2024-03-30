import React from "react";
import DeliveryBox from "../delivery-box";

const list = [
  {
    name: "Life Church",
    status: "Active",
    address: "1052 E State Highway 152",
    delivery: "Mustang, OK 73064",
    volunteer: 1,
  },
  {
    name: "Life Church",
    status: "Active",
    address: "1052 E State Highway 152",
    delivery: "Mustang, OK 73064",
    volunteer: 2,
  },
  {
    name: "Life Church",
    status: "Active",
    address: "1052 E State Highway 152",
    delivery: "Mustang, OK 73064",
    volunteer: 1,
  },
  {
    name: "Life Church",
    status: "Active",
    address: "1052 E State Highway 152",
    delivery: "Mustang, OK 73064",
    volunteer: 2,
  },
  {
    name: "Life Church",
    status: "Active",
    address: "1052 E State Highway 152",
    delivery: "Mustang, OK 73064",
    volunteer: 1,
  },
];

const ResponsiveDeliveryTable = () => {
  return (
    <div className="flex sm:hidden flex-col w-full">
      {list.map((item, index) => (
        <DeliveryBox
          key={index}
          name={item.name}
          status={item.status}
          address={item.address}
          delivery={item.delivery}
          volunteer={item.volunteer}
        />
      ))}
    </div>
  );
};

export default ResponsiveDeliveryTable;
