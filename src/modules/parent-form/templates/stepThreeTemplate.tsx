import InputForm from "@/modules/common/input-form";
import SectionTitle from "@/modules/common/section-title";
import SelectForm from "@/modules/common/select-form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StepThreeTemplate = () => {
  return (
    <div className="flex justify-center items-center md:px-16 md:py-12 bg-sky-100 ">
      <div className="flex flex-col max-w-full w-[900px]">
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
            <div className="flex gap-5 justify-between  text-sm font-semibold max-md: max-md:mt-10 ">
              <Link
                href={"/parentform/step-2"}
                className="justify-center px-3 py-2 text-sm font-semibold rounded-sm border border-solid border-slate-200 text-neutral-900"
              >
                Go Back
              </Link>

              <Link
                href={"/parentform/success"}
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
