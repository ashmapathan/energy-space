import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";

function Header({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
  function handleScroll() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
  if (window.scrollY >= section.offsetTop - 100) {
    setActiveSection(section.id);
  }
});
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header className={`fixed top-0 left-0 w-full shadow-md z-50 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900"
      : "bg-white"
  }`}>
      <div className="w-full flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
        <img
          src={darkMode ? logoDark : logoLight}
          alt="Energy Space Logo"
          className="h-12 w-auto"
        />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#hero" className={`hover:text-green-600 transition ${
            activeSection === "hero"
      ? "text-green-500 font-semibold"
      : darkMode
      ? "text-white"
      : "text-black"
  }`}>
            Home
          </a>

          <a href="#about" className={`hover:text-green-600 transition ${
            activeSection === "about"
      ? "text-green-500 font-semibold"
      : darkMode
      ? "text-white"
      : "text-black"
  }`}>
            About
          </a>

          <a
            href="#services"
            className={`hover:text-green-600 transition whitespace-nowrap ${
              activeSection === "services"
      ? "text-green-500 font-semibold"
      : darkMode
      ? "text-white"
      : "text-black"
  }`}
          >
            Our Services
          </a>

          <a href="#benefits" className={`hover:text-green-600 transition ${
            activeSection === "benefits"
      ? "text-green-500 font-semibold"
      : darkMode
      ? "text-white"
      : "text-black"
  }`}>
            Benefits
          </a>

          <a href="#blogs" className={`hover:text-green-600 transition ${
            activeSection === "blogs"
      ? "text-green-600 font-semibold"
      : darkMode
      ? "text-white"
      : "text-black"
  }`}>
            Blogs
          </a>

          <a href="#contact" className={`hover:text-green-600 transition ${
            activeSection === "contact"
      ? "text-green-500 font-semibold"
      : darkMode
      ? "text-white"
      : "text-black"
  }`}>
            Contact
          </a>

          <button
  onClick={() => setDarkMode(!darkMode)}
  className={`text-xl cursor-pointer transition duration-300 hover:scale-110 ${
    darkMode
      ? "text-yellow-400 hover:text-yellow-300"
      : "text-gray-800 hover:text-gray-600"
  }`}
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>
          
          <a
            href="#contact"
            className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
          >
            Join Now
          </a>
        </nav>

        {/* Mobile Menu Wrapper */}
        <div ref={menuRef} className="lg:hidden relative">
          {/* Hamburger Button */}
            <button
  className={`text-3xl cursor-pointer transition ${
    darkMode
      ? "text-white"
      : "text-black"
  }`}
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <HiX /> : <HiMenu />}
</button>
          {/* Mobile Menu */}
          {isOpen && (
            <nav className={`absolute right-0 w-90 shadow-lg py-6 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800"
      : "bg-white"
  }`}>
              <div className="flex flex-col items-center gap-6">
                <a
                  href="#hero"
                  onClick={() => setIsOpen(false)}
                  className={`transition hover:text-green-600 ${
  darkMode
    ? "text-white"
    : "text-black"
}`}
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className={`transition hover:text-green-600 ${
  darkMode
    ? "text-white"
    : "text-black"
}`}
                >
                  About
                </a>

                <a
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className={`transition hover:text-green-600 ${
  darkMode
    ? "text-white"
    : "text-black"
}`}
                >
                  Our Services
                </a>

                <a
                  href="#benefits"
                  onClick={() => setIsOpen(false)}
                  className={`transition hover:text-green-600 ${
  darkMode
    ? "text-white"
    : "text-black"
}`}
                >
                  Benefits
                </a>

                <a
                  href="#blogs"
                  onClick={() => setIsOpen(false)}
                  className={`transition hover:text-green-600 ${
  darkMode
    ? "text-white"
    : "text-black"
}`}
                >
                  Blogs
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className={`transition hover:text-green-600 ${
  darkMode
    ? "text-white"
    : "text-black"
}`}
                >
                  Contact
                </a>

                <button
  onClick={() => setDarkMode(!darkMode)}
  className={`text-xl cursor-pointer transition ${
    darkMode
      ? "text-yellow-400 hover:text-yellow-300"
      : "text-gray-800 hover:text-green-600"
  }`}
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-56 text-center bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
                >
                  Join Now
                </a>

                
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;