"use client";

import Icon from "@/modules/common/icons";
import Message from "@/modules/dashboard/components/message";
import RequestsTable from "../components/requests-table";
import RequestFilters from "../components/filters";
import Search from "../../common/search";
import Button from "@/modules/common/button";
import RequestSelected from "../components/request-selected";

const RequestsTemplate = () => {
  return (
    <div className="page">
      <Message number={1} />
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Requests.svg" />
          <h2>Requests</h2>
        </div>
        <Button text="+ Add Request" />
      </div>
      <div className="flex flex-col gap-4 w-full items-start">
        {/* TODO: Add logic to swing between the two components */}
        <RequestFilters />
        {/* <RequestSelected /> */}

        <Search width="w-full" />
      </div>
      <RequestsTable />
    </div>
  );
};

export default RequestsTemplate;
