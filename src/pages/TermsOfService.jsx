import ToolHeader from "../components/ToolHeader";

function TermsOfService({ darkMode }) {
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
          Terms of Service
        </h1>

        <p className="mt-8 leading-8">
          By using Energy Space, you agree that this website is provided solely
          for educational and portfolio demonstration purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Fitness Information
        </h2>

        <p className="mt-4 leading-8">
          Workout plans, nutrition plans, BMI calculations, and calorie
          estimates are intended for general guidance only and should not be
          considered professional medical advice.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          User Responsibility
        </h2>

        <p className="mt-4 leading-8">
          Users should consult qualified healthcare or fitness professionals
          before beginning any exercise or nutrition program.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Portfolio Project
        </h2>

        <p className="mt-4 leading-8">
          Energy Space is a React.js portfolio project created to demonstrate
          frontend development skills and does not provide commercial fitness
          services.
        </p>
      </div>
    </section>
    </>
  );
}

export default TermsOfService;