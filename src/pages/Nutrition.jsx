import { useState, useEffect } from "react";
import ToolHeader from "../components/ToolHeader";

function Nutrition({ darkMode }) {
 const [selectedPlan, setSelectedPlan] = useState(() => {
  return localStorage.getItem("nutritionPlan") || "lose";
});

useEffect(() => {
  localStorage.setItem("nutritionPlan", selectedPlan);
}, [selectedPlan]);


  const nutritionPlans = {
   
  lose: {
  title: "🥗 Weight Loss Meal Plan",
  totalCalories: "1800 kcal/day",
  water: "2.5 Litres/day",
  meals: [
    {
      time: "Breakfast",
      calories: "450 kcal",
      items: [
        "🥣 Oats - 50g",
        "🥚 Boiled Eggs - 2",
        "🍎 Apple - 1 medium"
      ]
    },
    {
      time: "Lunch",
      calories: "600 kcal",
      items: [
        "🍚 Brown Rice - 150g",
        "🍗 Grilled Chicken - 150g",
        "🥗 Salad - 1 bowl"
      ]
    },
    {
      time: "Snack",
      calories: "250 kcal",
      items: [
        "🥣 Greek Yogurt - 200g",
        "🥜 Almonds - 10"
      ]
    },
    {
      time: "Dinner",
      calories: "500 kcal",
      items: [
        "🐟 Fish - 150g",
        "🥦 Mixed Vegetables - 1 bowl",
        "🍲 Soup - 1 cup"
      ]
    }
  ],
   foodsToEat: [
    "🥚 Eggs",
    "🍗 Chicken Breast",
    "🥦 Broccoli",
    "🍎 Apple",
    "🥬 Spinach",
  ],

  foodsToAvoid: [
    "🍟 Fried Foods",
    "🥤 Soft Drinks",
    "🍩 Donuts",
    "🍰 Cakes",
    "🍫 Chocolate",
  ],
},

 gain: {
  title: "💪 Muscle Gain Meal Plan",
  totalCalories: "2700 kcal/day",
  water: "3.5 Litres/day",
  meals: [
    {
      time: "Breakfast",
      calories: "700 kcal",
      items: [
        "🍞 Peanut Butter Toast - 2 slices",
        "🥚 Eggs - 3",
        "🍌 Banana - 1 large",
        "🥛 Milk - 250 ml",
      ],
    },
    {
      time: "Lunch",
      calories: "850 kcal",
      items: [
        "🍚 Rice - 250g",
        "🍗 Chicken Breast - 200g",
        "🥦 Mixed Vegetables - 1 bowl",
      ],
    },
    {
      time: "Snack",
      calories: "450 kcal",
      items: [
        "🥤 Protein Shake - 1 serving",
        "🥜 Mixed Nuts - 30g",
      ],
    },
    {
      time: "Dinner",
      calories: "700 kcal",
      items: [
        "🧀 Paneer - 200g",
        "🍠 Sweet Potato - 200g",
        "🥦 Broccoli - 1 bowl",
      ],
    },
  ],
  foodsToEat: [
  "🍗 Chicken Breast",
  "🥩 Lean Beef",
  "🥚 Eggs",
  "🥛 Milk",
  "🥜 Mixed Nuts",
],

foodsToAvoid: [
  "🍭 Candy",
  "🥤 Sugary Drinks",
  "🍟 Junk Food",
  "🍕 Excess Fast Food",
  "🍺 Alcohol",
],
},

 maintain: {
  title: "⚖️ Balanced Diet Plan",
  totalCalories: "2200 kcal/day",
  water: "3 Litres/day",
  meals: [
    {
      time: "Breakfast",
      calories: "500 kcal",
      items: [
        "🥣 Oats - 60g",
        "🥛 Milk - 250 ml",
        "🍎 Seasonal Fruit - 1 medium",
      ],
    },
    {
      time: "Lunch",
      calories: "700 kcal",
      items: [
        "🍚 Rice - 180g",
        "🥣 Dal - 1 bowl",
        "🥗 Mixed Vegetables - 1 bowl",
      ],
    },
    {
      time: "Snack",
      calories: "300 kcal",
      items: [
        "🍊 Mixed Fruits - 1 bowl",
        "🥜 Nuts - 20g",
      ],
    },
    {
      time: "Dinner",
      calories: "700 kcal",
      items: [
        "🫓 Chapati - 2",
        "🍛 Curry - 1 bowl",
        "🥗 Salad - 1 bowl",
      ],
    },
  ],
  foodsToEat: [
  "🥦 Vegetables",
  "🍎 Fruits",
  "🥛 Milk",
  "🍚 Whole Grains",
  "🥜 Nuts",
],

foodsToAvoid: [
  "🍟 Fried Foods",
  "🥤 Soft Drinks",
  "🍬 Excess Sugar",
  "🍕 Processed Foods",
  "🍰 Cakes",
],
},
  };

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
          Nutrition Plans
        </h1>

        <p className="text-center mt-4">
          Choose a nutrition plan that matches your fitness goal.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

  <div
    onClick={() => setSelectedPlan("lose")}
    className={`p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
      selectedPlan === "lose"
        ? "bg-green-500 text-white"
        : darkMode
        ? "bg-gray-800 hover:bg-gray-700"
        : "bg-white hover:bg-green-50"
    }`}
  >
    <h2 className="text-2xl font-bold">
      🥗 Weight Loss
    </h2>

    <p className="mt-3">
      Healthy meals for reducing body fat.
    </p>
  </div>

  <div
    onClick={() => setSelectedPlan("gain")}
    className={`p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
      selectedPlan === "gain"
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
      High-protein meals for building muscle.
    </p>
  </div>

  <div
    onClick={() => setSelectedPlan("maintain")}
    className={`p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
      selectedPlan === "maintain"
        ? "bg-green-500 text-white"
        : darkMode
        ? "bg-gray-800 hover:bg-gray-700"
        : "bg-white hover:bg-green-50"
    }`}
  >
    <h2 className="text-2xl font-bold">
      ⚖️ Balanced Diet
    </h2>

    <p className="mt-3">
      Balanced meals for maintaining health.
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
    {nutritionPlans[selectedPlan].title}
  </h2>

  <p className="mt-4 text-center text-lg text-green-500 font-semibold">
  Total Daily Calories:{" "}
  {nutritionPlans[selectedPlan].totalCalories}
</p>

<p className="text-center text-sm mt-2 text-gray-500">
  *This is a sample meal plan. Adjust portions according to your calorie needs.
</p>

  <div className="grid md:grid-cols-2 gap-6 mt-10">
    {nutritionPlans[selectedPlan].meals.map(
      (meal, index) => (
        <div
          key={index}
          className={`p-5 rounded-xl border ${
            darkMode
              ? "border-gray-700"
              : "border-gray-200"
          }`}
        >
          <h3 className="text-xl font-bold">
            {meal.time}
          </h3>

          <p className="inline-block mt-3 px-3 py-1 rounded-full bg-green-500 text-white text-sm font-semibold">
  {meal.calories}
</p>

<ul className="mt-3 space-y-2">
  {meal.items.map((item, i) => (
    <li key={i}>• {item}</li>
  ))}
</ul>
        </div>
      )
    )}

      {/* 👇 ADD WATER INTAKE HERE */}
  <div
    className={`mt-10 p-6 rounded-xl border ${
      darkMode
        ? "border-gray-700 bg-gray-900"
        : "border-gray-200 bg-green-50"
    }`}
  >
    <h3 className="text-2xl font-bold">
      💧 Daily Water Intake
    </h3>

    <p className="mt-4 text-xl">
      {nutritionPlans[selectedPlan].water}
    </p>
    </div>
  </div>
  <div className="grid md:grid-cols-2 gap-6 mt-8">

  <div
    className={`p-6 rounded-xl border ${
      darkMode
        ? "bg-gray-900 border-gray-700"
        : "bg-green-50 border-gray-200"
    }`}
  >
    <h3 className="text-2xl font-bold">
      🍎 Foods to Eat
    </h3>

    <ul className="mt-4 space-y-2">
      {nutritionPlans[selectedPlan].foodsToEat.map(
        (food, index) => (
          <li key={index}>
            {food}
          </li>
        )
      )}
    </ul>
  </div>

  <div
    className={`p-6 rounded-xl border ${
      darkMode
        ? "bg-gray-900 border-gray-700"
        : "bg-red-50 border-gray-200"
    }`}
  >
    <h3 className="text-2xl font-bold">
      🚫 Foods to Avoid
    </h3>

    <ul className="mt-4 space-y-2">
      {nutritionPlans[selectedPlan].foodsToAvoid.map(
        (food, index) => (
          <li key={index}>
            {food}
          </li>
        )
      )}
    </ul>
  </div>

</div>
</div>
      </div>
    </section>
    </>
  );
}

export default Nutrition;