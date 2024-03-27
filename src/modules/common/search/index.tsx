import Icon from "@/modules/common/icons";
import React from "react";

const Search = () => {
  return (
    <div className="flex items-center w-full p-3 gap-2 bg-light border border-neutral-300">
      <Icon svg="/icons/Search.svg" width={16} />
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full text-xs bg-light placeholder:font-semibold outline-none focus:outline-none"
      />
    </div>
  );
};

export default Search;
