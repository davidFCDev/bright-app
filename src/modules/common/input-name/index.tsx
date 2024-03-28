import Icon from "@/modules/common/icons";

const NameImput = ({ showIcon }: { showIcon: boolean }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="name" className="font-semibold">
        Name
      </label>
      <div className="flex items-center gap-5 justify-between">
        <input
          type="text"
          id="name"
          className="w-[400px] px-4 py-3 outline-none border border-neutral-300 bg-light"
          placeholder="Jaxson Geidt"
        />
        {showIcon && <Icon svg="/icons/Minus.svg" />}
      </div>
    </div>
  );
};

export default NameImput;
