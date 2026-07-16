import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function WorkoutTracker({ darkMode }) {
  const location = useLocation();

  const workoutType =
    location.state?.workout || "fitness";

    const totalDays = 5;

 const startKey = `${workoutType}-start-date`;

let startDate = localStorage.getItem(startKey);

if (!startDate) {
  const now = new Date();

startDate = `${now.getFullYear()}-${String(
  now.getMonth() + 1
).padStart(2, "0")}-${String(
  now.getDate()
).padStart(2, "0")}`;
  localStorage.setItem(startKey, startDate);
}

const today = new Date();

const start = new Date(startDate);

const diffTime = today.getTime() - start.getTime();

const dayNumber =
  Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

const currentDay = Math.max(
  1,
  Math.min(dayNumber, totalDays)
);

  const workoutPlans = {
    lose: [
      {
        id: 1,
        name: "🏃 Brisk Walking",
        detail: "20 min",
        completed: false,
      },
      {
        id: 2,
        name: "🏋️ Bodyweight Squats",
        detail: "3 × 15 reps",
        completed: false,
      },
      {
        id: 3,
        name: "🤸 Jumping Jacks",
        detail: "3 × 30 sec",
        completed: false,
      },
      {
        id: 4,
        name: "🧘 Plank",
        detail: "3 × 30 sec",
        completed: false,
      },
      {
        id: 5,
        name: "🚴 Cycling",
        detail: "20 min",
        completed: false,
      },
    ],

    gain: [
      {
        id: 1,
        name: "🏋️ Bench Press",
        detail: "4 × 10 reps",
        completed: false,
      },
      {
        id: 2,
        name: "🏋️ Squats",
        detail: "4 × 10 reps",
        completed: false,
      },
      {
        id: 3,
        name: "💪 Dumbbell Rows",
        detail: "3 × 12 reps",
        completed: false,
      },
      {
        id: 4,
        name: "🔥 Shoulder Press",
        detail: "3 × 12 reps",
        completed: false,
      },
      {
        id: 5,
        name: "🦵 Deadlift",
        detail: "4 × 8 reps",
        completed: false,
      },
    ],

    fitness: [
      {
        id: 1,
        name: "🚶 Walking",
        detail: "15 min",
        completed: false,
      },
      {
        id: 2,
        name: "🤸 Jump Rope",
        detail: "10 min",
        completed: false,
      },
      {
        id: 3,
        name: "🏋️ Push-ups",
        detail: "3 × 12 reps",
        completed: false,
      },
      {
        id: 4,
        name: "🧘 Stretching",
        detail: "10 min",
        completed: false,
      },
      {
        id: 5,
        name: "🚴 Cycling",
        detail: "15 min",
        completed: false,
      },
    ],
  };

  const storageKey = `workouts-${workoutType}-day-${currentDay}`;
  const streakKey = `${workoutType}-streak`;

  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem(storageKey);

    return saved
      ? JSON.parse(saved)
      : workoutPlans[workoutType];
  });

  const [streak, setStreak] = useState(() => {
  return Number(localStorage.getItem(streakKey)) || 0;
});

  useEffect(() => {
  const saved = localStorage.getItem(storageKey);

  setWorkouts(
    saved
      ? JSON.parse(saved)
      : workoutPlans[workoutType]
  );
}, [workoutType, storageKey]);

useEffect(() => {
  localStorage.setItem(streakKey, streak);
}, [streak]);


  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(workouts)
    );
  }, [workouts, storageKey]);


  function toggleWorkout(id) {
  setWorkouts(
    workouts.map((workout) =>
      workout.id === id
        ? {
            ...workout,
            completed: !workout.completed,
          }
        : workout
    )
  );
}

function resetProgress() {
  setWorkouts(
    workouts.map((workout) => ({
      ...workout,
      completed: false,
    }))
  );
}

// calculations
  const completedWorkouts = workouts.filter(
    (workout) => workout.completed
  ).length;

  const progress =
  workouts.length > 0
    ? (completedWorkouts / workouts.length) * 100
    : 0;

const remainingWorkouts =
  workouts.length - completedWorkouts;

const allCompleted =
  completedWorkouts === workouts.length;

  
 const streakAwardKey = `${workoutType}-day-${currentDay}-streak-awarded`;

useEffect(() => {
  if (
    allCompleted &&
    !localStorage.getItem(streakAwardKey)
  ) {
    const newStreak = streak + 1;

    setStreak(newStreak);

    localStorage.setItem(streakKey, newStreak);

    localStorage.setItem(
      streakAwardKey,
      "true"
    );
  }
}, [allCompleted]);

return (
  <section
    className={`min-h-screen py-10 px-6 ${
      darkMode
        ? "bg-gray-900 text-white"
        : "bg-gray-50 text-black"
    }`}
  >
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold text-center">
        Daily Workout Tracker
      </h1>

      <p className="text-center mt-4">
        Track today's workout progress.
      </p>

       <div
  className={`mt-6 rounded-2xl p-5 shadow-lg ${
    darkMode
      ? "bg-gray-800"
      : "bg-green-50"
  }`}
>
  <div className="flex justify-between items-center">

    <div className="text-center">
      <p className="text-2xl">📅</p>
      <h2 className="text-xl font-bold text-green-500">
        Day {currentDay}/{totalDays}
      </h2>
    </div>

    <div className="text-center">
      <p className="text-2xl">🔥</p>
      <h2 className="text-xl font-bold text-orange-500">
        {streak} Day{streak !== 1 ? "s" : ""}
      </h2>
      <p
        className={`text-sm ${
          darkMode
            ? "text-gray-300"
            : "text-gray-600"
        }`}
      >
        Current Streak
      </p>
    </div>

  </div>

  <p
    className={`text-center mt-5 ${
      darkMode
        ? "text-gray-300"
        : "text-gray-600"
    }`}
  >
    {currentDay === totalDays
      ? "🎉 Final workout day! Finish strong!"
      : `${totalDays - currentDay} workout day${
          totalDays - currentDay > 1 ? "s" : ""
        } remaining.`}
  </p>
</div>

{/* Challenge Progress */}

<div
  className={`mt-8 rounded-2xl p-6 shadow-lg ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
>
  <h2 className="text-2xl font-bold mb-6">
    📅 Challenge Progress
  </h2>

  <div className="space-y-4">
    {Array.from({ length: totalDays }, (_, index) => {
      const day = index + 1;

      const savedDay = localStorage.getItem(
        `workouts-${workoutType}-day-${day}`
      );

      let completed = false;

      if (savedDay) {
        const data = JSON.parse(savedDay);

        completed = data.every(
          (workout) => workout.completed
        );
      }

      return (
        <div
          key={day}
          className={`flex justify-between items-center p-4 rounded-xl transition ${
            darkMode
              ? "bg-gray-700"
              : "bg-gray-100"
          }`}
        >
          <span className="font-semibold">
            Day {day}
          </span>

          {completed ? (
            <span className="text-green-500 font-bold">
              ✅ Completed
            </span>
          ) : day === currentDay ? (
            <span className="text-orange-500 font-bold">
              🔥 Today
            </span>
          ) : day < currentDay ? (
            <span className="text-red-500 font-bold">
              ❌ Missed
            </span>
          ) : (
            <span className="text-gray-400 font-bold">
              🔒 Locked
            </span>
          )}
        </div>
      );
    })}
  </div>
</div>

{streak === totalDays && (
  <div
    className={`mt-8 rounded-2xl p-6 text-center shadow-lg ${
      darkMode ? "bg-green-900" : "bg-green-100"
    }`}
  >
    <h2 className="text-3xl font-bold text-green-500">
      🏆 Challenge Completed!
    </h2>

    <p className="mt-3">
      Congratulations! You completed the 5-Day Workout Challenge.
    </p>
  </div>
)}

      {/* Workout List */}
      <div
        className={`mt-10 rounded-2xl p-8 shadow-lg ${
          darkMode
            ? "bg-gray-800"
            : "bg-white"
        }`}
      >
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="flex items-center justify-between py-4 border-b last:border-b-0"
          >
            <div className="flex items-center gap-4">

              <input
                type="checkbox"
                checked={workout.completed}
                onChange={() =>
                  toggleWorkout(workout.id)
                }
                className="w-5 h-5 accent-green-500 cursor-pointer"
              />

             <div>
  <p
    className={`font-semibold ${
      workout.completed
        ? "line-through text-gray-400"
        : ""
    }`}
  >
    {workout.name}
  </p>

  <p
    className={`text-sm ${
      darkMode
        ? "text-gray-400"
        : "text-gray-500"
    }`}
  >
    {workout.detail}
  </p>
</div>

            </div>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div
        className={`mt-8 rounded-2xl p-8 shadow-lg ${
          darkMode
            ? "bg-gray-800"
            : "bg-white"
        }`}
      >
        <h2 className="text-2xl font-bold">
          Workout Progress
        </h2>

        <div className="w-full bg-gray-300 rounded-full h-4 mt-6">

          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <p className="mt-4 text-lg">
          {completedWorkouts} / {workouts.length} Exercises Completed
        </p>

        <p className="text-green-500 font-bold text-xl mt-2">
          {Math.round(progress)}%
        </p>

      </div>

      <button
  onClick={resetProgress}
  className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition cursor-pointer"
>
  Reset Progress
</button>


<div
  className={`mt-8 p-6 rounded-2xl shadow-lg ${
    darkMode
      ? "bg-gray-800"
      : "bg-white"
  }`}
>
  <h2 className="text-2xl font-bold text-center">
    🏆 Workout Summary
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mt-6">

    <div className="text-center">
      <p className="text-4xl font-bold text-green-500">
        {completedWorkouts}
      </p>

      <p className="mt-2">
        Completed
      </p>
    </div>

    <div className="text-center">
      <p className="text-4xl font-bold text-orange-500">
        {remainingWorkouts}
      </p>

      <p className="mt-2">
        Remaining
      </p>
    </div>

  </div>

  <div className="mt-8 text-center">

    {allCompleted ? (
      <p className="text-green-500 font-bold text-xl">
        🎉 Workout Completed!
      </p>
    ) : (
      <p className="text-gray-500">
        Keep going! You're almost there 💪
      </p>
    )}

  </div>
</div>
    </div>
  </section>
);
}

export default  WorkoutTracker;