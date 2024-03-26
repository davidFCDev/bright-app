import Image from "next/image";
import React, { ReactNode } from "react";

interface IconProps {
  svg: string;
  width?: number;
}

const Icon = ({ svg, width }: IconProps) => {
  return (
    <Image src={svg} alt="chart" width={width || 24} height={width || 24} />
  );
};

export default Icon;
