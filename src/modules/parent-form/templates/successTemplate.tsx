import Image from "next/image";
import Link from "next/link";
import React from "react";

const SuccessTemplate = () => {
  return (
    <div className="flex justify-center items-start md:px-16 md:py-12 min-h-screen bg-sky-100 ">
      <div className="flex flex-col w-full max-w-[900px]">
        <div className="flex gap-5 text-base md:text-2xl font-semibold text-right text-neutral-900 py-5 px-5 md:py-0 md:mb-10">
          <Image
            src={"/Logo.png"}
            alt=""
            width={180}
            height={100}
            className="mx-auto h-auto w-32 md:w-44 my-auto"
          />
        </div>

        <div className="w-full max-w-xl bg-white p-10 flex flex-col gap-6 items-center rounded-sm mx-auto">
          <Image
            alt="lazy"
            src="/icons/Complete.svg"
            width={32}
            height={32}
            className="self-center w-8 aspect-square"
          />
          <h3 className="text-center text-2xl">
            The form has been successfully submitted!
          </h3>
          <p className="text-center text-sm text-[#404041]">
            Pellentesque aliquam dignissim mi, vitae finibus nulla congue at.
            Maecenas sapien eros, venenatis a ipsum vitae, faucibus maximus
            tellus. Fusce imperdiet sapien ut erat volutpat faucibus.
          </p>
          <Link
            href={"/"}
            className="justify-center px-3 py-2 text-white bg-sky-500 rounded-sm"
          >
            Go Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessTemplate;
