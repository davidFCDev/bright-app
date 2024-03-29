"use client";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import Search from "@/modules/common/search";
import Filters from "@/modules/common/filters";
import UsersTable from "../components/users-table";
import UserAdd from "../components/user-add";
import UserEdit from "../components/user-edit";
import { useInterfaceContext } from "@/lib/context/interface-context";


const UsersTemplate = () => {
  const {handleShowAdd} = useInterfaceContext();

  return (
    <div className="page relative">
      <div className="flex items-center justify-between w-full">
        <div className="title">
          <Icon svg="/icons/Users.svg" />
          <h2>Users</h2>
        </div>
        <Button text="+ Add User" onClick={handleShowAdd} />
      </div>
      <div className="flex flex-col gap-4 w-full items-start">
        <Filters />
        <Search width="w-full" />
      </div>
      <UsersTable />
      <UserAdd  />
      <UserEdit user="Jaxson Geidt" />
    </div>
  );
};

export default UsersTemplate;
