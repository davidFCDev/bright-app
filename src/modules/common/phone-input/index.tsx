
const PhoneInput = () => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="phone" className="font-semibold">
        Phone
      </label>
      <div className="flex items-center gap-5 justify-between">
        <input
          type="text"
          id="phone"
          className="w-[400px] px-4 py-3 outline-none border border-neutral-300 bg-light"
          placeholder="(248) 762-0356"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
