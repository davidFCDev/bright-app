import React from "react";

const MailInput = () => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="mail" className="font-semibold">
        Mail
      </label>
      <div className="flex items-center gap-5">
        <input
          type="text"
          id="mail"
          className="w-[400px] px-4 py-3 outline-none border border-neutral-300 bg-light"
          placeholder="jaxson.geidt@webmail.com"
        />
      </div>
    </div>
  );
};

export default MailInput;
