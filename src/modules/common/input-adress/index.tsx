const AddressInput = () => {
  
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="address" className="font-semibold">
        Address
      </label>
      <div className="flex items-center gap-5 justify-between">
        <input
          type="text"
          id="address"
          className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
          placeholder="1052 E State Highway 152"
        />
      </div>
    </div>
  );
};

export default AddressInput;
