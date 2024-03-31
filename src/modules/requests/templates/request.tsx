"use client";

import Icon from "@/modules/common/icons";
import Message from "@/modules/common/message";
import RequestsTable from "../components/requests-table";
import Search from "../../common/search";
import Button from "@/modules/common/button";
import RequestSelected from "../components/request-selected";
import ResponsiveTable from "../components/responsive-table";
import ResponsiveAssignRequest from "../components/responsive-assign-request";
import InputFilters from "@/modules/common/input-filters";
import { useRouter } from "next/navigation";

const RequestsTemplate = () => {
  const router = useRouter();

  const handleAddRequest = () => {
    router.push("/menu/requests/new/step-1");
  };

  return (
    <div className="page">
      <Message number={1} />
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Requests.svg" />
          <h2>Requests</h2>
        </div>
        <Button onClick={handleAddRequest} text="+ Add Request" />
      </div>
      
      <div className="flex flex-row-reverse sm:flex-col gap-4 w-full items-start">
        <InputFilters
          filters={["Status: All", "Assigned Volunteer: All", "Date: All"]}
        />
        <Search width="w-full" />
      </div>

      {/* <RequestSelected /> */}
      <RequestsTable />

      <ResponsiveTable />

      <ResponsiveAssignRequest />
    </div>
  );
};

export default RequestsTemplate;
