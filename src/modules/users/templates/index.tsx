"use client";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import Search from "@/modules/common/search";
import Filters from "@/modules/common/filters";
import UsersTable from "../components/users-table";
import UserAdd from "../components/user-add";
import UserEdit from "../components/user-edit";
import { useInterfaceContext } from "@/lib/context/interface-context";
import ResponsiveUserTable from "../components/responsive-user-table";
import InputFilters from "@/modules/common/input-filters";

const UsersTemplate = () => {
  const { handleShowUserAdd } = useInterfaceContext();

  return (
    <div className="page relative">
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Users.svg" />
          <h2>Users</h2>
        </div>
        <Button text="+ Add User" onClick={handleShowUserAdd} />
      </div>
      <div className="flex flex-row-reverse sm:flex-col gap-4 w-full items-start">
        <InputFilters filters={["Status: All", "Date: All"]} />
        <Search width="w-full" />
      </div>

      <UsersTable />

      <ResponsiveUserTable />

      <UserAdd />
      <UserEdit />
    </div>
  );
};

export default UsersTemplate;
