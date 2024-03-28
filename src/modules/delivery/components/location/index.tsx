import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import React from "react";

const Location = () => {
    const { delivery, goBack } = useInterfaceContext();
    
  return (
    <div className="flex items-center gap-3 text-xs font-semibold">
      <button onClick={goBack}>
        <Icon svg="/icons/ArrowRight.svg" props="rotate-180" />
      </button>
      <p>Delivery Locations</p>
      <span>/</span>
      <p className="text-neutral-500">
        {delivery?.organization} ({delivery?.location})
      </p>
    </div>
  );
};

export default Location;
