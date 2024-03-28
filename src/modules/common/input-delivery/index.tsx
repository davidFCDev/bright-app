import StateInput from "../input-state";

const DeliveryInput = () => {
  return (
    <div className="flex flex-col gap-5">
      <StateInput />
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="lat" className="font-semibold">
            Lat
          </label>
          <div className="flex items-center gap-5 justify-between">
            <input
              type="text"
              id="lat"
              className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
              placeholder="35.3888265"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="long" className="font-semibold">
            Long
          </label>
          <div className="flex items-center gap-5 justify-between">
            <input
              type="text"
              id="long"
              className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
              placeholder="35.3888265"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="distance" className="font-semibold">
          Max Distance
        </label>
        <div className="flex items-center gap-5 justify-between">
          <input
            type="text"
            id="distance"
            className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
            placeholder=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="zips" className="font-semibold">
          Allow Zips
        </label>
        <div className="flex items-center gap-5 justify-between">
          <input
            type="text"
            id="zips"
            className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
            placeholder="73064"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInput;
