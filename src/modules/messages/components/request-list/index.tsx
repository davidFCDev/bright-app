import { REQUEST_LIST } from "@/constants";
import React from "react";
import User from "../user";

interface RequestListProps {
  props?: any;
}

const RequestList = ({ props }: RequestListProps) => {
  return (
    <div className={`${props}`}>
      {REQUEST_LIST.map((item, index) => (
        <User
          key={index}
          child={item.child}
          date={item.date}
          name={item.name}
          status={item.status}
        />
      ))}
    </div>
  );
};

export default RequestList;
