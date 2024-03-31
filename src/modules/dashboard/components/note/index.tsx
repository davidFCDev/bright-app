import React from "react";

const Note = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold">You · Today, 02:55pm</p>
      <div className="px-8 py-4 bg-terciary">
        <p className="text-sm font-semibold">
          Sed eu ex nulla. Nulla commodo, sem sit amet tempus ultricies, lacus
          nisl consectetur dolor, id elementum justo risus non massa. Sed ut
          condimentum mauris
        </p>
      </div>
    </div>
  );
};

export default Note;
