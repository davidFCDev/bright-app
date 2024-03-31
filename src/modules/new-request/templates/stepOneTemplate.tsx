import Image from "next/image";
import Link from "next/link";
import React from "react";
import InputForm from "../../common/input-form";
import SectionTitle from "../../common/section-title";
import SelectForm from "../../common/select-form";

const StepOneTemplate = () => {
  return (
    <div className="flex gap-5">
      <div className=" max-w-screen-xl mx-8 lg:mx-14 w-full ">
        <div className="flex flex-col mt-5 max-md:mt-10 ">
          <div className="flex gap-3 self-start text-xs font-semibold text-neutral-500">
            <img
              loading="lazy"
              src="/icons/ArrowRight.svg"
              className="shrink-0 w-5 aspect-square rotate-180"
            />
            <div className="my-auto text-black font-semibold">
              Requests /
              <span className="text-neutral-500 font-normal"> New Request</span>
            </div>
          </div>
          <div className="shrink-0 mt-4 h-px border border-solid bg-slate-200 border-slate-200 " />
          <div className="flex flex-col self-center pt-2.5 mt-5 w-full max-w-3xl">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 w-full">
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
            <div className="flex gap-5 justify-end mb-16 text-sm font-semibold max-md: max-md:mt-10 ">
              <Link
                href={"/menu/requests/new/step-2"}
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
