import { Link } from "react-router-dom";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";

function ToolHeader({ darkMode }) {
  return (
    <header
      className={`flex items-center justify-between px-10 lg:px-20 py-4 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Link to="/">
        <img
          src={darkMode ? logoDark : logoLight}
          alt="Energy Space"
          className="h-12"
        />
      </Link>

      <Link
        to="/"
        className="text-green-500 font-semibold hover:text-green-600"
      >
        Home
      </Link>
    </header>
  );
}

export default ToolHeader;