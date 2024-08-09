import Button from './Button.jsx';

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-6 py-12 bg-gray-900 text-gray-50 md:w-72 rounded-r-lg shadow-md">
      <h2 className="mb-6 font-semibold uppercase text-gray-300 md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject} className="w-full mb-4 bg-teal-600 hover:bg-teal-700">
          + Add Project
        </Button>
      </div>
      <ul className="mt-4">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;
          const cssClasses = `w-full text-left px-4 py-2 rounded-lg my-2 cursor-pointer transition duration-300 
            ${isSelected ? 'bg-teal-600 text-gray-50' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'}`;

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
