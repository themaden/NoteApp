import NewTask from './NewTask.jsx';

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 ? (
        <p className="text-gray-600 my-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="mt-6 space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
              <span className="text-gray-800">{task.text}</span>
              <button
                className="text-red-600 hover:text-red-800 font-medium"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
