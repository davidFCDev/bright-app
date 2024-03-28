const AgencyInput = () => {
  
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="agency" className="font-semibold">
        Agency Name
      </label>
      <div className="flex items-center gap-5 justify-between">
        <input
          type="text"
          id="agency"
          className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
          placeholder="Act of Love"
        />
      </div>
    </div>
  );
};

export default AgencyInput;
