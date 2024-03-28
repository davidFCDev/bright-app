import React from "react";

const UserInput = () => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="phone" className="font-semibold">
        User Type
      </label>
      <div className="flex items-center gap-5 justify-between">
        <select className="w-[400px] px-4 py-3 outline-none border border-neutral-300 bg-light">
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
      </div>
    </div>
  );
};

export default UserInput;
