import { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        className="w-64 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
        value={enteredTask}
        placeholder="Enter task..."
      />
      <button
        className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition duration-300"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
