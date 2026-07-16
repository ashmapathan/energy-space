import ToolHeader from "../components/ToolHeader";

function PrivacyPolicy({ darkMode }) {
  return (
    <>
     <ToolHeader darkMode={darkMode} />
    <section
      className={`min-h-screen py-16 px-6 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">
          Privacy Policy
        </h1>

        <p className="mt-8 leading-8">
          Energy Space is a portfolio project created for educational and
          demonstration purposes. We respect your privacy and do not collect,
          store, or sell any personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Information We Collect
        </h2>

        <p className="mt-4 leading-8">
          Workout progress, calculator values, and theme preferences are stored
          locally in your browser using Local Storage. This information never
          leaves your device.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Contact Form
        </h2>

        <p className="mt-4 leading-8">
          Messages submitted through the contact form are securely delivered
          using EmailJS. No information is permanently stored by this website.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Disclaimer
        </h2>

        <p className="mt-4 leading-8">
          This website is a frontend portfolio project and is not intended to
          replace professional medical, nutritional, or fitness advice.
        </p>
      </div>
    </section>
    </>
  );
}

export default PrivacyPolicy;