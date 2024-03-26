'use client'
import Image from "next/image";
import React, { useState } from "react";
import { NAME_LIST } from "@/constants";

const DropDown = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
  
    return (
      <div className="w-44 flex flex-col gap-2 rounded-md shadow shadow-neutral-300 px-5 py-3 text-xs font-semibold text-neutral-700">
        <ul className="flex flex-col gap-2">
          {NAME_LIST.map((item, index) => (
            <li 
              key={index} 
              className="flex flex-col gap-2 items-start justify-between w-full relative"
              onMouseEnter={() => setSelectedItem(index)}
              onMouseLeave={() => setSelectedItem(null)}
            >
              <div className="flex items-start justify-between w-full">
                <a href="#" className="hover:text-black">
                  {item.name}
                </a>
                {selectedItem === index && (
                  <div className="absolute -bottom-1 right-0">
                    <Image src="/cursor.png" alt="cursor" width={24} height={24} />
                  </div>
                )}
              </div>
              <hr className="border border-neutral-100 w-full" />
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default DropDown;
