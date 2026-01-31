import React from "react";
import InputField from "./InputField";
import Gojo from "../assets/Gojo.jpg";
import NoProjectSelected from "./NoProjectSelected";

const NewProject = () => {
  return (
    <>
      <div className="ml-96">
        <div className="w-[35rem] mt-16 ">
          <menu className="flex items-center justify-end gap-4 my-4">
            <li>
              <button className="text-stone-800 hover:text-stone-950">
                Cancel
              </button>
            </li>
            <li>
              <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">
                Save
              </button>
            </li>
          </menu>
          <div>
            <InputField label="Title" />
            <InputField label="Description" textarea={true} />
            <InputField label="Due Date" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProject;
