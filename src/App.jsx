import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BMI from "./pages/BMI";
import Calories from "./pages/Calories";
import Nutrition from "./pages/Nutrition";
import Workout from "./pages/Workout";
import WorkoutTracker from "./pages/WorkoutTracker";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
  const bg = darkMode ? "#111827" : "#f9fafb";

  document.documentElement.style.backgroundColor = bg;
  document.body.style.backgroundColor = bg;
}, [darkMode]);
   
  return (
    <>
     <ScrollToTop />
    <Routes>
      <Route
        path="/"
        element={
          <Home
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />

      <Route
        path="/bmi"
        element={<BMI darkMode={darkMode} />}
      />

      <Route
        path="/calories"
        element={<Calories darkMode={darkMode} />}
      />

      <Route
        path="/nutrition"
        element={<Nutrition darkMode={darkMode} />}
      />

      <Route
        path="/workout"
        element={<Workout darkMode={darkMode} />}
      />

      <Route path="/workout-tracker" 
      element={<WorkoutTracker darkMode={darkMode} />} />

      <Route path="*"
      element={<NotFound darkMode={darkMode} />}
      />

      <Route
      path="/privacy-policy"
      element={<PrivacyPolicy darkMode={darkMode} />}
      />

      <Route
       path="/terms-of-service"
       element={<TermsOfService darkMode={darkMode} />}
      />
    </Routes>

    </>
  );
}
export default App;