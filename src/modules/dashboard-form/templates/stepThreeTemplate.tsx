import Link from "next/link";
import React from "react";
import InputForm from "../../common/input-form";
import SectionTitle from "../../common/section-title";
import SelectForm from "../../common/select-form";
import Image from "next/image";

const StepThreeTemplate = () => {
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
                Steps 3/3 - Items Needed
              </h4>
            </div>
            <div className="flex flex-col justify-center mt-5 bg-sky-100 rounded-sm ">
              <div className=" h-3 bg-sky-500 rounded-sm w-full" />
            </div>
            <div className="flex flex-col mt-16 text-neutral-900">
              <SectionTitle title="Items Needed" iconSVG="/icons/List.svg" />
              <div className="flex flex-col  content-start mt-5 text-sm ">
                <div className="grid grid-cols-1 gap-5 w-full">
                  <SelectForm
                    label="Select items"
                    options={["Bed Frame", "Bottles", "Bunk Bed"]}
                    id="gender"
                  />
                </div>
                <div className="flex flex-wrap content-start gap-3 mt-5 text-sm">
                  {[
                    "Bed Frame",
                    "Crib",
                    "Clothing",
                    "Bed Frms",
                    "Bed Frams",
                    "Bed Frames",
                    "Cridb",
                    "Clothidng",
                  ].map((item) => (
                    <div key={item} className="flex flex-col justify-center">
                      <div className="flex flex-col">
                        <div className="flex gap-5 justify-between px-2 py-1.5 md:px-3.5 md:py-3.5 rounded-sm border border-solid bg-slate-50 border-slate-200">
                          <div className="my-auto">{item}</div>
                          {/* Using "X" as a placeholder for the image */}

                          <Image
                            src={"/icons/Close.svg"}
                            alt=""
                            width={16}
                            height={16}
                            className="shrink-0 w-4 aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr className="bg-[#E0E4F1] h-[1px] my-8" />
            <div className="flex flex-col text-neutral-900">
              <SectionTitle
                title="Top 3 Priorities"
                iconSVG="/icons/Priorities.svg"
              />
              <div className="flex flex-col  content-start mt-5 text-sm ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                  <SelectForm
                    label="#1 Priority"
                    options={["Bedframe", "Bottle"]}
                    id="no1-priority"
                  />
                  <SelectForm
                    label="#1 Priority"
                    options={["Bedframe", "Bottle"]}
                    id="no2-priority"
                  />
                  <SelectForm
                    label="#1 Priority"
                    options={["Bedframe", "Bottle"]}
                    id="no3-priority"
                  />
                </div>
              </div>
            </div>
            <hr className="bg-[#E0E4F1] h-[1px] my-8" />
            <div className="flex flex-col text-neutral-900">
              <SectionTitle title="Additional Notes" iconSVG="/icons/Info.svg" />
              <div className="flex flex-col  content-start mt-5 text-sm ">
                <div className="grid grid-cols-1 gap-5 w-full">
                  <InputForm
                    label="More Description"
                    placeholder="Please include quantity, sizes, allergies, types or other specifics needed..."
                    id="more_info"
                  />
                </div>
              </div>
            </div>

            <div className="justify-center p-3 mt-5 w-full text-black bg-[#E0F2F9] rounded-sm font-normal">
              Please note that while we do attempt to find specific brands if
              requested, costs and availability may limit us to alternative
              brands.
            </div>

            <hr className="bg-[#E0E4F1] h-[1px] my-8" />
            <div className="flex gap-5 justify-between  mb-16 text-sm font-semibold max-md: max-md:mt-10 ">
              <Link
                href={"/menu/dashboard/step-2"}
                className="justify-center px-3 py-2 text-sm font-semibold rounded-sm border border-solid border-slate-200 text-neutral-900"
              >
                Go Back
              </Link>

              <Link
                href={"/menu/dashboard/step-3"}
                className="justify-center px-3 py-2 text-white bg-sky-500 rounded-sm"
              >
                Finish and Submit Request
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThreeTemplate;
