export default function Button({ children, ...props }) {
     return (
       <button
         className="px-4 py-2 text-xs md:text-base rounded-md bg-blue-500 text-white hover:bg-blue-600 hover:text-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
         {...props}
       >
         {children}
       </button>
     );
   }
   