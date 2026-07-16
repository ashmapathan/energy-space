import { useState, useEffect } from "react";
import ToolHeader from "../components/ToolHeader";

function BMI({ darkMode }) {
const [height, setHeight] = useState(() => {
  return localStorage.getItem("bmiHeight") || "";
});
const [weight, setWeight] = useState(() => {
  return localStorage.getItem("bmiWeight") || "";
});
const [bmi, setBmi] = useState(null);
const [status, setStatus] = useState("");
const [error, setError] = useState("");

useEffect(() => {
  localStorage.setItem("bmiHeight", height);
  localStorage.setItem("bmiWeight", weight);
}, [height, weight]);

function calculateBMI() {
  setError("");
  if (!height || !weight) {
    setError("Please enter both height and weight.");
    setBmi(null);
    setStatus("");
  return;
}
const heightInMeters = parseFloat(height) / 100;
const weightInKg = parseFloat(weight);
if (
  heightInMeters <= 0 ||
  weightInKg <= 0 ||
  heightInMeters > 2.5 ||
  weightInKg > 300
) {
  setError("Please enter valid height and weight.");
  setBmi(null);
  setStatus("");
  return;
}

const bmiValue = weightInKg / (heightInMeters * heightInMeters);
setBmi(bmiValue.toFixed(1));
if (bmiValue < 18.5) {
  setStatus("Underweight");
} else if (bmiValue < 25) {
  setStatus("Healthy Weight");
} else if (bmiValue < 30) {
  setStatus("Overweight");
} else {
  setStatus("Obese"); 
}
}

let statusColor = "";

if (status === "Underweight") {
  statusColor = "text-blue-600";
} else if (status === "Healthy Weight") {
  statusColor = "text-green-600";
} else if (status === "Overweight") {
  statusColor = "text-yellow-500";
} else if (status === "Obese") {
  statusColor = "text-red-600";
}

  return (
    <>
    <ToolHeader darkMode={darkMode} />
    <section className={`min-h-screen py-10 px-6 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-50 text-black"
  }`}>

      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          BMI Calculator
        </h1>

        <p className="text-center mt-4">
          Enter your height and weight.
        </p>

        <div className="mt-10 space-y-6">
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

  {error && (
  <p className="text-red-500 text-center font-medium">
    {error}
  </p>
)}

  <button
    onClick={calculateBMI}
    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg transition cursor-pointer"
  >
    Calculate BMI
  </button>

   {bmi && (
   <div
  className={`mt-6 p-6 rounded-2xl shadow-lg border text-center ${
    darkMode
      ? "bg-gray-800 border-gray-700"
      : "bg-white border-gray-200"
  }`}
>
    <h2 className="text-2xl font-bold">
      BMI Result
    </h2>

    <p
  className={`mt-6 ${
    darkMode ? "text-gray-300" : "text-gray-500"
  }`}
> Your BMI</p>

    <p className="text-5xl font-bold mt-2">
      {bmi}
    </p>

    <p
  className={`mt-6 ${
    darkMode ? "text-gray-300" : "text-gray-500"
  }`}
> Status</p>

    <p className={`text-2xl font-semibold mt-2 ${statusColor}`}>
      {status}
    </p>
  </div>
)}

</div>


<div
  className={`mt-8 p-6 rounded-2xl ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
>
  <h3 className="text-2xl font-bold text-center mb-6">
    BMI Categories
  </h3>

  <div className="space-y-4">

    <div
      className={`p-4 rounded-xl border ${
        bmi < 18.5
          ? "border-blue-500 bg-blue-50 text-blue-700"
          : darkMode
          ? "border-gray-700"
          : "border-gray-200"
      }`}
    >
      <p className="font-semibold">
        🔵 Underweight
      </p>
      <p>BMI less than 18.5</p>
    </div>

    <div
      className={`p-4 rounded-xl border ${
        bmi >= 18.5 && bmi < 25
          ? "border-green-500 bg-green-50 text-green-700"
          : darkMode
          ? "border-gray-700"
          : "border-gray-200"
      }`}
    >
      <p className="font-semibold">
        🟢 Normal Weight
      </p>
      <p>BMI 18.5 – 24.9</p>
    </div>

    <div
      className={`p-4 rounded-xl border ${
        bmi >= 25 && bmi < 30
          ? "border-yellow-500 bg-yellow-50 text-yellow-700"
          : darkMode
          ? "border-gray-700"
          : "border-gray-200"
      }`}
    >
      <p className="font-semibold">
        🟡 Overweight
      </p>
      <p>BMI 25 – 29.9</p>
    </div>

    <div
      className={`p-4 rounded-xl border ${
        bmi >= 30
          ? "border-red-500 bg-red-50 text-red-700"
          : darkMode
          ? "border-gray-700"
          : "border-gray-200"
      }`}
    >
      <p className="font-semibold">
        🔴 Obesity
      </p>
      <p>BMI 30 or above</p>
    </div>

  </div>
</div>
      </div>
    </section>
    </>
  );
}

export default BMI;