const CityInput = () => {
  
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="city" className="font-semibold">
        City
      </label>
      <div className="flex items-center gap-5 justify-between">
        <input
          type="text"
          id="city"
          className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
          placeholder="Mustang"
        />
      </div>
    </div>
  );
};

export default CityInput;
