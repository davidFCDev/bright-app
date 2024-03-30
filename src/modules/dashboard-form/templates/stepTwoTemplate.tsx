import Link from "next/link";
import React from "react";
import InputForm from "../../common/input-form";
import SelectForm from "../../common/select-form";
import SectionTitle from "../../common/section-title";
import Image from "next/image";

const StepTwoTemplate = () => {
  return (
    <div className="flex gap-5">
      <div className=" max-w-screen-xl mx-8 lg:mx-14 w-full ">
        <div className="flex flex-col mt-5 max-md:mt-10 ">
          <div className="flex gap-3 self-start text-xs font-semibold text-neutral-500">
            <img
              loading="lazy"
              src="/icons/ArrowRight.svg"
              className="shrink-0 w-5 aspect-square"
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
                Steps 2/3 - Children Info
              </h4>
            </div>
            <div className="flex flex-col justify-center mt-5 bg-sky-100 rounded-sm ">
              <div className=" h-3 bg-sky-500 rounded-sm w-8/12" />
            </div>
            <div className="flex flex-col mt-16 text-neutral-900">
              <SectionTitle title="#1 Foster Child" iconSVG="/icons/Children.svg" />
              <div className="flex flex-col  content-start mt-5 text-sm ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                  <InputForm
                    label="First Name"
                    placeholder="Kiann"
                    id="first_name"
                  />

                  <SelectForm
                    label="Gender"
                    options={["Male", "Female"]}
                    id="gender"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-5 w-full">
                  <InputForm
                    label="Birthdate"
                    placeholder="8/30/2020 (3 yrs)"
                    id="birthdate"
                  />
                  <InputForm label="KK #" placeholder="20559193" id="kk" />
                </div>
              </div>
            </div>
            <hr className="bg-[#E0E4F1] h-[1px] my-8" />
            <div className="flex items-center whitespace-nowrap gap-1.5 w-fit px-4 py-2.5 text-xs font-semibold rounded-sm border  border-slate-200 text-neutral-900">
              <img
                loading="lazy"
                src={"/icons/AddCircle.svg"}
                className="w-4 h-auto"
              />
              <span>Add Another Child</span>
            </div>

            <hr className="bg-[#E0E4F1] h-[1px] my-8" />
            <div className="flex gap-5 justify-between  mb-16 text-sm font-semibold max-md: max-md:mt-10 ">
              <Link
                href={"/menu/dashboard/step-1"}
                className="justify-center px-3 py-2 text-sm font-semibold rounded-sm border border-solid border-slate-200 text-neutral-900"
              >
                Go Back
              </Link>

              <Link
                href={"/menu/dashboard/step-3"}
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

export default StepTwoTemplate;
