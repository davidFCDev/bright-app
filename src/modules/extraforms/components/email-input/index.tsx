import React from "react";

const EmailInput = () => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="email" className="font-semibold">
        Email
      </label>
      <div className="flex items-center gap-5">
        <input
          type="text"
          id="email"
          className="w-[400px] px-4 py-2 outline-none border border-neutral-300 bg-light"
          placeholder="jaxson.geidt@webmail.com"
        />
      </div>
    </div>
  );
};

export default EmailInput;
