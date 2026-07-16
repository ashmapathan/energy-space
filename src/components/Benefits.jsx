import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

function Benefits({ darkMode }) {
  const benefits = [
    {
       title: "Know Your Body Mass Index",
      description:
        "Calculate your BMI instantly and understand whether you're underweight, healthy, overweight, or obese.",
      link: "/bmi",
      side: "left",
    },
    {
       title: "Calculate Your Daily Calories",
      description:
        "Estimate your daily calorie needs based on your age, weight, height, activity level, and fitness goals.",
      link: "/calories",
      side: "right",
    },
    {
     title: "Get Personalized Nutrition Plans",
      description:
        "Receive goal-based meal recommendations tailored to your diet preferences, helping you fuel your workouts and achieve your fitness goals.",
      link: "/nutrition",
      side: "left",
    },
    {
      title: "Get Goal-Based Workout Plans",
      description:
        "Receive customized workout recommendations tailored to your fitness level, goals, and training preferences.",
      link: "/workout",
      side: "right",
    },
  ];

  const videos = [video1, video2, video3];
  const videoRefs = useRef([]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  videoRefs.current.forEach((video) => {
    if (video) observer.observe(video);
  });

  return () => observer.disconnect();
}, []);


  return (
    <section id="benefits" className={`py-10 px-6 lg:px-20 bg-gray-50 scroll-mt-24 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-50 text-black"
  }`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">Benefits</h2>

        <h3 className="text-2xl lg:text-4xl font-bold text-center mt-4">
          Discover Energy Space Benefits
        </h3>

        <p className={`text-center mt-4 max-w-3xl mx-auto ${
         darkMode ? "text-gray-300" : "text-gray-600"
  }`}>
          Unlock your full potential with Energy Space, your personal fitness
          partner for progress and motivation.
        </p>

        {/* Main Layout */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 items-start">

          {/* Left Cards */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {benefits
              .filter((item) => item.side === "left")
              .map((item) => (
                <div
                  key={item.title}
                  className={` rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-colors duration-300 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                 }`}
                >
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className={`mt-4 leading-7 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className="inline-block mt-6 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
                  >
                    Try It
                  </Link>
                </div>
              ))}
          </div>

          {/* Middle Videos */}
          <div className="flex flex-col gap-6 md:sticky md:top-24">
            {videos.map((video, index) => (
              <video
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
                className="rounded-3xl shadow-xl"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={video} type="video/mp4" />
              </video>
            ))}
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {benefits
              .filter((item) => item.side === "right")
              .map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-colors duration-300 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                 }`}
                >
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className={`mt-4 leading-7 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className="inline-block mt-6 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
                  >
                    Try It
                  </Link>
                </div>
              ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Benefits;