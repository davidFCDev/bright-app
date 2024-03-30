"use client";

import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import RequestDate from "../components/request-date";
import FirstBox from "../components/first-box";
import SecondBox from "../components/second-box";
import TodoTask from "../components/todo-task";
import Children from "../components/children";
import ItemsNeeded from "../components/items-needed";
import ItemsSent from "../components/items-sent";
import RequestsHistory from "../components/requests-history";
import Delivery from "../components/delivery";
import Notes from "../components/notes";
import ChildAdd from "../components/child-add";
import ItemAdd from "../components/item-add";

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

      <RequestDate />

      <div className="w-full flex items-start gap-5">
        <div className="flex flex-col gap-5 w-full sm:w-4/5 items-start">
          <div className="w-full flex flex-col sm:flex-row items-start gap-5 sm:h-72">
            <FirstBox />
            <SecondBox />
          </div>

          <Children />
          <Line />
          <ItemsNeeded />
          <Line />
          <ItemsSent />
          <Line />
          <RequestsHistory />
          <Line />
          <Delivery />
          <Line />
          <Notes />
        </div>

        <TodoTask />
      </div>

      <ChildAdd />
      <ItemAdd />
    </div>
  );
};

export default RequestsPreviewTemplate;
