import Icon from "@/modules/common/icons";
import React from "react";

interface SearchProps {
  width?: string;
}

const Search = ({ width }: SearchProps) => {
  return (
    <div className={`${width} flex items-center p-3 gap-2 bg-light border border-neutral-300`}>
      <Icon svg="/icons/Search.svg" width={16} />
      <input
        type="text"
        placeholder="Type to search..."
        className={`${width} text-xs bg-light placeholder:font-semibold outline-none focus:outline-none`}
      />
    </div>
  );
};

export default Search;
