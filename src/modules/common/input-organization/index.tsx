const OrganizationInput = () => {
  
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="organization" className="font-semibold">
        Organization
      </label>
      <div className="flex items-center gap-5 justify-between">
        <input
          type="text"
          id="organization"
          className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
          placeholder="Life Church"
        />
      </div>
    </div>
  );
};

export default OrganizationInput;
