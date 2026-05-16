import { Link, useRouteError } from "react-router";


const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-red-500 mb-4">
          {error?.status || 404}
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Something went wrong
        </h2>
       
        {/* Message */}
        <p className="text-gray-600 mb-6">
          {error?.statusText || error?.message || "Page not found"}
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;