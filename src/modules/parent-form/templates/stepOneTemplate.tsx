import InputForm from "@/modules/common/input-form";
import SectionTitle from "@/modules/common/section-title";
import SelectForm from "@/modules/common/select-form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StepOneTemplate = () => {
  return (
    <div className="flex justify-center items-center md:px-16 md:py-12 bg-sky-100">
      <div className="flex flex-col w-full max-w-[900px]">
        <div className="flex gap-5 text-base md:text-2xl font-semibold text-right text-neutral-900 py-5 px-5 md:py-0 md:mb-10">
          <Image
            src={"/Logo.png"}
            alt=""
            width={180}
            height={100}
            className="mx-auto h-auto w-32 md:w-44 my-auto"
          />
          <div className="flex-auto my-auto">Foster Care Essentials</div>
        </div>
        <div className="w-full max-w-4xl bg-white px-5 md:px-0 py-10 rounded-sm">
          <div className="flex flex-col self-center pt-2.5 mt-5 w-full max-w-3xl mx-auto">
            <div className="flex gap-5 font-semibold max-md: ">
              <div className="flex-auto text-2xl text-neutral-900">
                New Request
              </div>
              <h4 className="flex-auto font-normal text-sm text-right text-neutral-700">
                Steps 1/3 - Main Request Info
              </h4>
            </div>
            <div className="flex flex-col justify-center mt-5 bg-sky-100 rounded-sm ">
              <div className=" h-3 bg-sky-500 rounded-sm w-4/12" />
            </div>

            <div className="flex flex-col mt-16 text-neutral-900">
              <SectionTitle title="Foster Parent Info" iconSVG="/icons/Users.svg" />
              <div className="flex flex-col  content-start mt-5 text-sm ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                  <InputForm
                    label="First Name"
                    placeholder="Kiann"
                    id="first_name"
                  />

                  <InputForm
                    label="Last Name"
                    placeholder="Bator"
                    id="last_name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-5 w-full">
                  <InputForm
                    label="Phone (optional)"
                    placeholder="(206) 342-8631"
                    id="phone"
                  />
                  <InputForm
                    label="Email"
                    placeholder="kiann.bator@gmail.com"
                    id="email"
                  />
                </div>
              </div>
            </div>
            <hr className="bg-[#E0E4F1] h-[1px] my-8" />
            <div className="flex flex-col text-neutral-900 ">
              <SectionTitle title="Shipping Address" iconSVG="/icons/Delivery.svg" />
              <div className="flex flex-col  content-start mt-5 text-sm ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                  <InputForm
                    label="Address"
                    placeholder="4326 Maple Avenue"
                    id="address"
                  />

                  <InputForm label="City" placeholder="Boise" id="city" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-5 w-full">
                  <InputForm
                    label="State"
                    placeholder="ID or Idaho"
                    id="state"
                  />
                  <InputForm label="Zip" placeholder="83704" id="zip" />
                </div>
              </div>
            </div>
            <hr className="bg-[#E0E4F1] h-[1px] my-8" />
            <div className="flex flex-col text-neutral-900">
              <SectionTitle title="Caseworker Info" iconSVG="/icons/Agencies.svg" />
              <div className="flex flex-col  content-start mt-5 text-sm ">
                <SelectForm
                  label="Agency"
                  options={["Agency #1", "Agency #2"]}
                  id="first_name"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-5 w-full">
                  <InputForm
                    label="First Name"
                    placeholder="Kiann"
                    id="first_name"
                  />

                  <InputForm
                    label="Last Name"
                    placeholder="Bator"
                    id="last_name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-5 w-full">
                  <InputForm
                    label="Phone"
                    placeholder="(206) 342-8631"
                    id="phone"
                  />
                  <InputForm
                    label="Email"
                    placeholder="kiann.bator@gmail.com"
                    id="email"
                  />
                </div>
              </div>
            </div>
            <hr className="bg-[#E0E4F1] h-[1px] my-8" />
            <div className="flex gap-5 justify-end text-sm font-semibold max-md: max-md:mt-10 ">
              <Link
                href={"/parentform/step-2"}
                className="justify-center px-3 py-2 text-white bg-sky-500 rounded-sm"
              >
                Next Step
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOneTemplate;
