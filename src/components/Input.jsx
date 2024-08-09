import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes = 
    'w-full p-2 border-b-2 rounded-md border-blue-400 bg-gray-100 text-gray-800 focus:outline-none focus:border-blue-600 transition duration-300 ease-in-out';

  return (
    <div className="flex flex-col gap-2 my-4">
      <label className="text-sm font-semibold uppercase text-gray-700">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});

export default Input;
