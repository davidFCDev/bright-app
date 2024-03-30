import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import Link from "next/link";
import React from "react";

const Location = () => {
  const { delivery } = useInterfaceContext();

  return (
    <div className="flex items-center gap-3 text-xs font-semibold">
      <Link href="/menu/delivery">
        <Icon svg="/icons/ArrowRight.svg" props="rotate-180" />
      </Link>
      <p>Delivery Locations</p>
      <span>/</span>
      <p className="text-neutral-500">
        {delivery?.organization} ({delivery?.location})
      </p>
    </div>
  );
};

export default Location;
