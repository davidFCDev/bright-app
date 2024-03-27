import Image from "next/image";
import React, { ReactNode } from "react";

interface IconProps {
  svg: string;
  width?: number;
  props?: string;
}

const Icon = ({ svg, width, props }: IconProps) => {
  return (
    <Image src={svg} alt="chart" width={width || 24} height={width || 24} className={props}/>
  );
};

export default Icon;
