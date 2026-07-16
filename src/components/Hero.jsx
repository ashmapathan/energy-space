import heroImage from "../assets/images/hero.jpg";


function Hero({darkMode}) {
  return (
    
    <section
      id="hero"
      className={`min-h-screen px-6 lg:px-20 py-24 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black"
  }`}
    >
    
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 items-center gap-16">

        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-green-500 bg-green-500/10 text-green-400 font-semibold text-sm mb-8">
  <span className="text-lg">⚡</span>
  <span>YOUR DAILY FITNESS COMPANION</span>
</div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Track Your
            <span className="text-green-500"> Fitness Journey</span>
          </h1>

          <p className={`mt-6 text-md leading-8 ${
  darkMode ? "text-gray-300" : "text-gray-600"
}`}>
            Discover the ultimate fitness companion with Energy Space.
            Effortlessly log your workouts, count reps, and track calories
            burned. Stay motivated and achieve your goals with ease.
          </p>

         {/* Quick Features */}
<div className="flex flex-wrap gap-3 mt-8">
  {[
    "⚖️ BMI Calculator",
    "🔥 Calorie Tracker",
    "🥗 Nutrition Planner",
    "🏋️ Workout Plans",
  ].map((item) => (
    <span
      key={item}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-gray-200"
          : "bg-gray-100 border-gray-200 text-gray-700"
      }`}
    >
      {item}
    </span>
  ))}
</div>
          <button 
          onClick={() => {
    document
      .getElementById("benefits")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="mt-8 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={heroImage}
            alt="Fitness Hero"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

      </div>

      
    </section>
  );
}

export default Hero;