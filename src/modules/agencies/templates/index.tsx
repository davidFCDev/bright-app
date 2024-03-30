"use client";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import Search from "@/modules/common/search";
import { useInterfaceContext } from "@/lib/context/interface-context";
import AgenciesList from "../components/agencies-list";
import AgencyAdd from "../components/agency-add";

const AgenciesTemplate = () => {
  const { handleShowAgencyAdd } = useInterfaceContext();

  return (
    <div className="page relative">
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Agencies.svg" />
          <h2>Agencies</h2>
        </div>
        <div className="flex items-center gap-4">
          <Button text="+ Add Agency" onClick={() => handleShowAgencyAdd()} />
        </div>
      </div>

      <Search width="w-full" />

      <AgenciesList />
      <AgencyAdd />
    </div>
  );
};

export default AgenciesTemplate;
