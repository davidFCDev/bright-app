import Icon from "@/modules/common/icons";
import React from "react";

const Chat = () => {
  return (
    <div className="px-12 py-4 flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 max-w-md">
        <p className="text-xs font-semibold">Marilyn Vetrovs · 11:18am</p>
        <p className="p-4 bg-secondary text-white text-sm rounded">
          Nullam id augue bibendum, facilisis libero nec, sagittis elit. Vivamus
          vulputate massa eget metus sollicitudin congue. Quisque eu lobortis
          mauris.
        </p>
      </div>

      <div className="flex justify-end">
        <div className="flex flex-col gap-2 max-w-md">
          <p className="text-xs font-semibold">You · 02:55pm</p>
          <p className="p-4 bg-terciary text-black text-sm rounded">
            Sed eu ex nulla. Nulla commodo, sem sit amet tempus ultricies, lacus
            nisl consectetur dolor, id elementum justo risus non massa. Sed ut
            condimentum mauris
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 max-w-md">
        <div className="flex flex-col gap-2 ">
          <p className="text-xs font-semibold">Marilyn Vetrovs · 11:18am</p>
          <div className="flex flex-col gap-3 p-4 bg-secondary text-white text-sm rounded">
            <div className="bg-white flex flex-col gap-2 text-black px-3 py-2 rounded">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Robert Miller</p>
                <div className="px-3 py-1 text-xs border border-primary text-primary bg-terciary">
                  New
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Icon svg="/icons/Children.svg" width={14} />
                  <span className="text-xs">2 Children</span>
                </div>
                <span className="text-xs">02/12/2024, 11:21 am</span>
              </div>
            </div>
            <p>
              Nullam id augue bibendum, facilisis libero nec, sagittis elit.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3 p-4 bg-secondary text-white text-sm rounded">
            <p>
              Nullam id augue bibendum, facilisis libero nec, sagittis elit.
              Vivamus vulputate massa eget metus sollicitudin congue. Quisque eu
              lobortis mauris.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3 p-4 bg-secondary text-white text-sm rounded">
            <p>Vivamus vulputate massa eget!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
