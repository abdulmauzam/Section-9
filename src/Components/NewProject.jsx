import React, { useRef } from "react";
import InputField from "./InputField";
import Gojo from "../assets/Gojo.jpg";
import NoProjectSelected from "./NoProjectSelected";

const NewProject = ({onAdd}) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function onSave() {
    const enteredTitle = title.current.value
  const enteredDescription = description.current.value
  const enteredDueDate = dueDate.current.value
onAdd({
  title:enteredTitle,
  description:enteredDescription
, dueDate:enteredDueDate
})
}
  


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
              <button
                onClick={onSave}
                className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
              >
                Save
              </button>
            </li>
          </menu>
          <div>
            <InputField type='text' label="Title" ref={title} />
            <InputField label="Description" textarea={true} ref={description} />
            <InputField type='date' label="Due Date" ref={dueDate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProject;
