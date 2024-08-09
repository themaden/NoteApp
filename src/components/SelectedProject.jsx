import Tasks from "./Task";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="w-full max-w-3xl mt-16 mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <header className="pb-4 mb-6 border-b-2 border-gray-300">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">
            {project.title}
          </h1>
          <button
            className="text-red-500 hover:text-red-700 font-medium"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-gray-600">{formattedDate}</p>
        <p className="text-gray-700 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
