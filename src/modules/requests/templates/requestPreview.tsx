"use client";

import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import OutButton from "@/modules/common/outline-button";
import RequestDate from "../components/request-date";
import FirstBox from "../components/first-box";
import SecondBox from "../components/second-box";
import TodoTask from "../components/todo-task";

const RequestsPreviewTemplate = () => {
  const { request, goBack } = useInterfaceContext();

  return (
    <div className="page relative">
      <div className="flex items-center gap-4 text-xs font-semibold">
        <button onClick={goBack}>
          <Icon svg="/icons/ArrowRight.svg" width={16} props="rotate-180" />
        </button>
        <p>
          Requests /{" "}
          <span className="text-neutral-500">
            {request.name} ({request.child}{" "}
            {request.child > 1 ? "children" : "child"})
          </span>
        </p>
      </div>

      <Line />

      <RequestDate request={request} />

      <div className="w-full flex items-start gap-5">
        <div className="flex flex-col gap-5 w-full">
          <div className="w-full flex items-start gap-5 h-72">
            <FirstBox />
            <SecondBox />
          </div>

          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon svg="/icons/Children.svg" />
                <h2 className="font-semibold">Children (1)</h2>
                <Icon svg="/icons/DropDown.svg" props="rotate-180" width={16}/>
              </div>
              <OutButton text="Add" icon={<Icon svg="/icons/AddCircle.svg" width={14} />} />
            </div>
          </div>
        </div>

        <TodoTask />
      </div>
    </div>
  );
};

export default RequestsPreviewTemplate;
