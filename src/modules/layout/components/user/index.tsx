import { NavContext } from "@/lib/context/nav-context";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { BiSolidDoorOpen } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

const User = () => {
  const currentPath = usePathname();
  const navContext = useContext(NavContext);

  if (!navContext) {
    throw new Error("useNavContext must be used within a NavProvider");
  }

  const { showMenu } = navContext;

  let userType = "";
  if (currentPath.startsWith("/volunteer/")) {
    userType = "Volunteer";
  } else if (currentPath.startsWith("/admin/")) {
    userType = "Admin";
  }

  return (
    <>
      {showMenu && (
        <div className="border border-neutral-300 p-3 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="py-1 px-2 bg-terciary border border-secondary text-secondary font-semibold text-xs">
              {userType}
            </p>
            <button className="text-xl">
              <IoSettingsSharp />
            </button>
          </div>
          <p>Robert Miller</p>
          <p className="text-xs">robert@brightsky.com</p>
          <div>
            <button className="flex items-center gap-2 p-2 border border-neutral-300 hover:border-neutral-400">
              <div className="text-xl">
                <BiSolidDoorOpen />
              </div>
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      )}

      {!showMenu && (
        <div className="flex flex-col items-start gap-4">
          <button className="text-2xl">
            <IoSettingsSharp />
          </button>
          <button className="text-2xl">
              <BiSolidDoorOpen />
          </button>
        </div>
      )}
    </>
  );
};

export default User;
