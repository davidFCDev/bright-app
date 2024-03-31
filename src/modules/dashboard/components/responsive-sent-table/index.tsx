import React from "react";
import ItemSentBox from "../item-sent-box";

const ResponsiveItemSentTable = () => {
  return (
    <div className="flex flex-col sm:hidden w-full">
      <ItemSentBox />
      <ItemSentBox />
    </div>
  );
};

export default ResponsiveItemSentTable;
