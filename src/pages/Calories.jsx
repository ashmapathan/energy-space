import { useState, useEffect, useRef } from "react";
import ToolHeader from "../components/ToolHeader";

function Calories({ darkMode }) {
  const [age, setAge] = useState(() => {
  return localStorage.getItem("age") || "";
});
  const [gender, setGender] = useState(() => {
  return localStorage.getItem("gender") || "male";
});
  const [height, setHeight] = useState(() => {
  return localStorage.getItem("height") || "";
});
  const [weight, setWeight] = useState(() => {
  return localStorage.getItem("weight") || "";
});
  const [activity, setActivity] = useState(() => {
  return localStorage.getItem("activity") || "1.2";
});
  const [goal, setGoal] = useState(() => {
  return localStorage.getItem("goal") || "maintain";
});

  const [calories, setCalories] = useState(null);
  const [error, setError] = useState("");

  const [protein, setProtein] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [fat, setFat] = useState(null);
  const [fibre, setFibre] = useState(null);
  const [water, setWater] = useState(null);

  useEffect(() => {
  localStorage.setItem("age", age);
  localStorage.setItem("gender", gender);
  localStorage.setItem("height", height);
  localStorage.setItem("weight", weight);
  localStorage.setItem("activity", activity);
  localStorage.setItem("goal", goal);
}, [age, gender, height, weight, activity, goal]);

  function calculateCalories() {
    setError("");

    if (!age || !height || !weight) {
      setError("Please fill in all fields.");
      setCalories(null);
      return;
    }

    const ageValue = parseInt(age);
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (
      ageValue <= 0 ||
      ageValue > 120 ||
      heightValue <= 0 ||
      heightValue > 250 ||
      weightValue <= 0 ||
      weightValue > 300
    ) {
      setError("Please enter valid values.");
      setCalories(null);
      return;
    }

    let bmr;

    if (gender === "male") {
      bmr =
        10 * weightValue +
        6.25 * heightValue -
        5 * ageValue +
        5;
    } else {
      bmr =
        10 * weightValue +
        6.25 * heightValue -
        5 * ageValue -
        161;
    }

    const maintenanceCalories =
  bmr * parseFloat(activity);

let finalCalories = maintenanceCalories;

if (goal === "lose") {
  finalCalories = maintenanceCalories - 500;
} else if (goal === "gain") {
  finalCalories = maintenanceCalories + 500;
}

setCalories(Math.round(finalCalories));

// Protein
let proteinValue;

if (goal === "lose") {
  proteinValue = weightValue * 2.0;
} else if (goal === "gain") {
  proteinValue = weightValue * 2.2;
} else {
  proteinValue = weightValue * 1.6;
}

// Healthy Fat (25% calories)
const fatValue = (finalCalories * 0.25) / 9;

// Fibre
const fibreValue = (finalCalories / 1000) * 14;

// Water
const waterValue = (weightValue * 35) / 1000;

// Carbs (remaining calories)
const carbCalories =
  finalCalories -
  proteinValue * 4 -
  fatValue * 9;

const carbsValue = carbCalories / 4;

setProtein(Math.round(proteinValue));
setFat(Math.round(fatValue));
setFibre(Math.round(fibreValue));
setWater(waterValue.toFixed(1));
setCarbs(Math.round(carbsValue));

  setTimeout(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 100);
  }

  const resultRef = useRef(null);

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
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Daily Calories Calculator
        </h1>

        <p className="text-center mt-4">
          Calculate your daily calorie requirement.
        </p>

        <div className="mt-10 space-y-6">
          {/* Age */}
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`w-full p-4 rounded-lg border outline-none transition-all duration-300 focus:ring-2 focus:ring-green-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-black placeholder-gray-500"
            }`}
          />

          {/* Height */}
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={`w-full p-4 rounded-lg border outline-none transition-all duration-300 focus:ring-2 focus:ring-green-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-black placeholder-gray-500"
            }`}
          />

          {/* Weight */}
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={`w-full p-4 rounded-lg border outline-none transition-all duration-300 focus:ring-2 focus:ring-green-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-black placeholder-gray-500"
            }`}
          />

          {/* Gender */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={`w-full p-4 rounded-lg border outline-none cursor-pointer transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {/* Activity */}
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className={`w-full p-4 rounded-lg border outline-none cursor-pointer transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            <option value="1.2">
              Sedentary (Little or no exercise)
            </option>
            <option value="1.375">
              Lightly Active (1–3 days/week)
            </option>
            <option value="1.55">
              Moderately Active (3–5 days/week)
            </option>
            <option value="1.725">
              Very Active (6–7 days/week)
            </option>
            <option value="1.9">
              Extra Active (Athlete)
            </option>
          </select>

          {/* Goal */}
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className={`w-full p-4 rounded-lg border outline-none cursor-pointer transition-all duration-300  ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-center font-medium">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            onClick={calculateCalories}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg transition cursor-pointer"
          >
            Calculate Calories
          </button>

          {/* Result */}
          {calories !== null && (
            <div
              ref={resultRef}
              className={`mt-6 p-6 rounded-2xl shadow-lg border text-center  ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2 className="text-2xl font-bold">
                Daily Calories
              </h2>

              <p
  className={`mt-6 ${
    darkMode
      ? "text-gray-300"
      : "text-gray-500"
  }`}
>
  {goal === "lose"
    ? "Calories for Weight Loss"
    : goal === "gain"
    ? "Calories for Weight Gain"
    : "Calories to Maintain Weight"}
</p>

              <p className="text-5xl font-bold mt-2">
                {calories}
              </p>

              <p className="mt-2 text-lg">
                kcal/day
              </p>

              <div
  className={`mt-8 border-t pt-6 space-y-4 ${
    darkMode
      ? "border-gray-700"
      : "border-gray-200"
  }`}
>
  <div className="flex justify-between">
    <span>🥩 Protein</span>
    <span>{protein} g</span>
  </div>

  <div className="flex justify-between">
    <span>🍚 Carbohydrates</span>
    <span>{carbs} g</span>
  </div>

  <div className="flex justify-between">
    <span>🥑 Healthy Fats</span>
    <span>{fat} g</span>
  </div>

  <div className="flex justify-between">
    <span>🥦 Fibre</span>
    <span>{fibre} g</span>
  </div>

  <div className="flex justify-between">
    <span>💧 Water Intake</span>
    <span>{water} L</span>
  </div>
</div>

<div
  className={`mt-8 border-t pt-6 ${
    darkMode
      ? "border-gray-700"
      : "border-gray-200"
  }`}
>
  <h3 className="text-xl font-semibold mb-4">
    🍽 Recommended Foods
  </h3>

  <ul className="space-y-2">
    {goal === "gain" && (
      <>
        <li>🍗 Chicken Breast</li>
        <li>🥚 Eggs</li>
        <li>🥛 Milk</li>
        <li>🍌 Bananas</li>
        <li>🍚 Brown Rice</li>
        <li>🥜 Almonds</li>
      </>
    )}

    {goal === "lose" && (
      <>
        <li>🥗 Green Vegetables</li>
        <li>🥦 Broccoli</li>
        <li>🐟 Fish</li>
        <li>🍎 Apples</li>
        <li>🥚 Eggs</li>
        <li>🥣 Oats</li>
      </>
    )}

    {goal === "maintain" && (
      <>
        <li>🍗 Lean Chicken</li>
        <li>🍚 Rice</li>
        <li>🥛 Milk</li>
        <li>🥜 Nuts</li>
        <li>🥬 Vegetables</li>
        <li>🍎 Fruits</li>
      </>
    )}
  </ul>
</div>

              
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
}

export default Calories;