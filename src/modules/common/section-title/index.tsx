import Image from "next/image";
import React from "react";

type Props = { iconSVG: string; title: string };

export default function SectionTitle({ iconSVG, title }: Props) {
  return (
    <div className="flex items-center gap-2 font-semibold">
      <Image
        loading="lazy"
        width={20}
        height={20}
        alt=""
        src={iconSVG}
        className="w-5 h-auto"
      />
      <div>{title}</div>
    </div>
  );
}
