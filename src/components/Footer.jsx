import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer({ darkMode }) {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Terms of Service", to:  "/terms-of-service" },
  ];

  const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/ashmapathan",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/pathanashmabegum",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:ashma2542@gmail.com",
  },
  ];

  return (
    <footer className={`bg-gray-900 text-white pt-16 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black"
  }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        {/* Footer Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className={`text-3xl font-bold ${
    darkMode ? "text-white" : "text-black"
  }`}>
              Energy Space
            </h2>

            <p className={`mt-4 leading-7 ${
    darkMode
      ? "text-gray-300"
      : "text-gray-600"
  }`}>
              Where Fitness Meets Social Connection.
              Empower your fitness journey with personalized
              workouts, nutrition guidance, and a supportive
              community.
            </p>

            <button className="flex items-center gap-3 mt-6 bg-green-500 px-5 py-3 rounded-full hover:bg-green-600 transition">
              <FaEnvelope />
              hello@eneryspace.laventures.com
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
    darkMode ? "text-white" : "text-black"
  }`}>
              Quick Links
            </h3>

           <ul className="space-y-4">
  {quickLinks.map((link) => (
    <li key={link.name}>
      {link.to ? (
        <Link
          to={link.to}
          className={`transition ${
            darkMode
              ? "text-gray-300 hover:text-green-600"
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          {link.name}
        </Link>
      ) : (
        <a
          href={link.href}
          className={`transition ${
            darkMode
              ? "text-gray-300 hover:text-green-600"
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          {link.name}
        </a>
      )}
    </li>
  ))}
</ul>
          </div>

          {/* Social */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 text-black ${
    darkMode ? "text-white" : "text-black"
  }`}>
              Follow Us
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition duration-300 hover:scale-110 ${
  darkMode
    ? "bg-gray-700 text-white hover:bg-green-600"
    : "bg-gray-800 text-white hover:bg-green-600"
}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div   className={`border-t mt-12 py-6 text-center transition-colors duration-300 ${
    darkMode
      ? "border-gray-700 text-gray-400"
      : "border-gray-300 text-gray-500"
  }`}>
          © {new Date().getFullYear()} Energy Space. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;