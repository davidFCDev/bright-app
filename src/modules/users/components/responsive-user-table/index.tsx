import React from "react";
import UserBoxUsers from "../user-box";

const ResponsiveUserTable = () => {
  return (
    <div className="flex sm:hidden flex-col w-full">
      <UserBoxUsers
        name="Talan Kenter"
        status="Active"
        mail="talan29@hotmail.com"
        type="Admin"
        phone="(206) 342-8631"
      />
      <UserBoxUsers
        name="Jaylon Vaccaro"
        status="Active"
        mail="jaylon@hotmail.com"
        type="Volunteer"
        phone="(206) 342-8631"
      />
      <UserBoxUsers
        name="Jaylon Vaccaro"
        status="Active"
        mail="jaylon@hotmail.com"
        type="Volunteer"
        phone="(206) 342-8631"
      />
      <UserBoxUsers
        name="Jaylon Vaccaro"
        status="Active"
        mail="jaylon@hotmail.com"
        type="Volunteer"
        phone="(206) 342-8631"
      />
    </div>
  );
};

export default ResponsiveUserTable;
