import { useRef } from 'react';

import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Got it">
        <h2 className="text-xl font-semibold text-red-600 my-4">Invalid Input</h2>
        <p className="text-gray-700 mb-4">
          Oops ... it looks like you missed entering some details.
        </p>
        <p className="text-gray-700 mb-4">
          Please make sure to fill out all fields correctly.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 p-6 bg-gray-50 rounded-lg shadow-lg">
        <menu className="flex items-center justify-end gap-4 mb-6">
          <li>
            <button
              className="text-gray-800 hover:text-gray-900 font-medium"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition duration-300"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
