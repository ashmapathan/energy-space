import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToolHeader from "../components/ToolHeader";

function Workout({ darkMode }) {
const [selectedWorkout, setSelectedWorkout] = useState("lose");

const workoutPlans = {
  lose: {
  title: "🔥 Weight Loss Workout",
  duration: "45–60 min",
  frequency: "5 Days / Week",
  calories: "350–500 kcal",
  rest: "30–45 sec between sets",
  tip: "Stay hydrated and maintain a calorie deficit.",
  exercises: [
    "🏃 Brisk Walking - 20 min",
    "🏋️ Bodyweight Squats - 3 × 15",
    "🤸 Jumping Jacks - 3 × 30 sec",
    "🧘 Plank - 3 × 30 sec",
    "🚴 Cycling - 20 min",
  ],
},

  gain: {
  title: "💪 Muscle Gain Workout",
  duration: "60–75 min",
  frequency: "5 Days / Week",
  calories: "250–400 kcal",
  rest: "60–90 sec between sets",
  tip: "Increase weights gradually and consume enough protein.",
  exercises: [
    "🏋️ Bench Press - 4 × 10",
    "🏋️ Squats - 4 × 10",
    "💪 Dumbbell Rows - 3 × 12",
    "🔥 Shoulder Press - 3 × 12",
    "🦵 Deadlift - 4 × 8",
  ],
},
fitness: {
  title: "❤️ General Fitness Workout",
  duration: "30–45 min",
  frequency: "4 Days / Week",
  calories: "250–350 kcal",
  rest: "30–60 sec between sets",
  tip: "Focus on consistency rather than intensity.",
  exercises: [
    "🚶 Walking - 15 min",
    "🤸 Jump Rope - 10 min",
    "🏋️ Push-ups - 3 × 12",
    "🧘 Stretching - 10 min",
    "🚴 Cycling - 15 min",
  ],
},
};

const navigate = useNavigate();

return (
  <>
  <ToolHeader darkMode={darkMode} />
  <section
    className={`min-h-screen py-10 px-6 transition-colors duration-300 ${
      darkMode
        ? "bg-gray-900 text-white"
        : "bg-gray-50 text-black"
    }`}
  >
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center">
        Workout Planner
      </h1>

      <p className="text-center mt-4">
        Choose a workout plan that matches your fitness goal.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">

  <div
    onClick={() => setSelectedWorkout("lose")}
    className={`p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
      selectedWorkout === "lose"
        ? "bg-green-500 text-white"
        : darkMode
        ? "bg-gray-800 hover:bg-gray-700"
        : "bg-white hover:bg-green-50"
    }`}
  >
    <h2 className="text-2xl font-bold">
      🔥 Weight Loss
    </h2>

    <p className="mt-3">
      Burn fat and improve endurance.
    </p>
  </div>

  <div
    onClick={() => setSelectedWorkout("gain")}
    className={`p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
      selectedWorkout === "gain"
        ? "bg-green-500 text-white"
        : darkMode
        ? "bg-gray-800 hover:bg-gray-700"
        : "bg-white hover:bg-green-50"
    }`}
  >
    <h2 className="text-2xl font-bold">
      💪 Muscle Gain
    </h2>

    <p className="mt-3">
      Build strength and muscle mass.
    </p>
  </div>

  <div
    onClick={() => setSelectedWorkout("fitness")}
    className={`p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
      selectedWorkout === "fitness"
        ? "bg-green-500 text-white"
        : darkMode
        ? "bg-gray-800 hover:bg-gray-700"
        : "bg-white hover:bg-green-50"
    }`}
  >
    <h2 className="text-2xl font-bold">
      ❤️ General Fitness
    </h2>

    <p className="mt-3">
      Stay active and maintain overall fitness.
    </p>
  </div>

</div>

<div
  className={`mt-12 p-8 rounded-2xl shadow-lg ${
    darkMode
      ? "bg-gray-800"
      : "bg-white"
  }`}
>
  <h2 className="text-3xl font-bold text-center">
    {workoutPlans[selectedWorkout].title}
  </h2>

  <p className="mt-4 text-center text-green-500 font-semibold text-lg">
    Duration: {workoutPlans[selectedWorkout].duration}
  </p>

  <div className="grid md:grid-cols-3 gap-4 mt-8">

  <div className="p-4 rounded-xl bg-green-500 text-white text-center">
    <h3 className="font-bold">📅 Frequency</h3>
    <p>{workoutPlans[selectedWorkout].frequency}</p>
  </div>

  <div className="p-4 rounded-xl bg-green-500 text-white text-center">
    <h3 className="font-bold">🔥 Calories Burn</h3>
    <p>{workoutPlans[selectedWorkout].calories}</p>
  </div>

  <div className="p-4 rounded-xl bg-green-500 text-white text-center">
    <h3 className="font-bold">⏱ Rest Time</h3>
    <p>{workoutPlans[selectedWorkout].rest}</p>
  </div>

</div>

  <div className="grid md:grid-cols-2 gap-6 mt-10">
    {workoutPlans[selectedWorkout].exercises.map(
      (exercise, index) => (
        <div
          key={index}
          className={`p-5 rounded-xl border ${
            darkMode
              ? "border-gray-700"
              : "border-gray-200"
          }`}
        >
          <p className="text-lg font-medium">
            {exercise}
          </p>
        </div>
      )
    )}
  </div>

  <div
  className={`mt-8 p-6 rounded-xl border ${
    darkMode
      ? "bg-gray-900 border-gray-700"
      : "bg-green-50 border-gray-200"
  }`}
>
  <h3 className="text-2xl font-bold">
    💡 Workout Tip
  </h3>

  <p className="mt-4">
    {workoutPlans[selectedWorkout].tip}
  </p>
</div>
</div>

<button
   onClick={() =>
    navigate("/workout-tracker", {
      state: { workout: selectedWorkout },
    })
  }
  className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition cursor-pointer"
>
  Start Today's Workout →
</button>
    </div>
  </section>
  </>
);
}

export default Workout;