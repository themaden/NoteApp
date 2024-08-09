import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-3/4 max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <img
        src={noProjectImage}
        alt="No project selected"
        className="w-24 h-24 object-contain mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        No Project Selected
      </h2>
      <p className="text-gray-600 mb-6">
        Select a project or get started with a new one
      </p>
      <Button onClick={onStartAddProject}>
        Create New Project
      </Button>
    </div>
  );
}
