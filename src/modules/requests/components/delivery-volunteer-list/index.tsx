import React from "react";
import DeliveryVolunteer from "../delivery-volunteer";

const DeliveryVolunteerList = () => {
  return (
    <div className="w-full flex items-start gap-4">
      <DeliveryVolunteer
        name="Jakob Philips"
        location="Life Church - Mustang"
        distance="8.67 miles from location"
      />
      <DeliveryVolunteer
        name="Maria Baptista"
        location="Life Church - Mustang"
        distance="8.67 miles from location"
      />
      <DeliveryVolunteer
        name="Allison"
        location="Life Church - Mustang"
        distance="8.67 miles from location"
      />
    </div>
  );
};

export default DeliveryVolunteerList;
