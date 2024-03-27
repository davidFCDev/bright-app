import { useNavContext } from "@/lib/context/nav-context";
import Icon from "@/modules/common/icons";

const User = () => {
  const { showMenu } = useNavContext();

  return (
    <>
      {showMenu && (
        <div className="border border-neutral-300 p-3 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="py-1 px-2 bg-terciary border border-secondary text-secondary font-semibold text-xs">
              Admin
            </span>
            <button className="text-xl">
              <Icon svg="/icons/Settings.svg" />
            </button>
          </div>
          <p>Robert Miller</p>
          <span className="text-xs">robert@brightsky.com</span>
          <>
            <button className="flex items-center gap-2 p-2 border border-neutral-300 hover:border-neutral-400">
              <Icon svg="/icons/Logout.svg" />
              <span className="text-sm">Logout</span>
            </button>
          </>
        </div>
      )}

      {!showMenu && (
        <div className="flex flex-col items-start gap-4">
          <button>
            <Icon svg="/icons/Settings.svg" />
          </button>
          <button>
            <Icon svg="/icons/Logout.svg" />
          </button>
        </div>
      )}
    </>
  );
};

export default User;
