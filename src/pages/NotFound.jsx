import { Link } from "react-router-dom";

function NotFound({ darkMode }) {
  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-black"
      }`}
    >
      <h1 className="text-8xl font-bold text-green-500">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="mt-4 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
      >
        🏠 Go Home
      </Link>
    </section>
  );
}

export default NotFound;