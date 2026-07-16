import { useEffect, useRef } from "react";

import fitnessVideo from "../assets/videos/fitness.mp4";

function About({ darkMode }) {
  const videoRef = useRef(null);
    useEffect(() => {
  const video = videoRef.current;

  if (!video) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(video);

  return () => observer.disconnect();
}, []);

  return (
    <section
      id="about"
      className={`px-6 lg:px-20 bg-gray-50 scroll-mt-24 transition-colors duration-30 ${ darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-50 text-black"
  }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          About Us
        </h2>

        <h3 className="text-2xl lg:text-4xl font-bold text-center mt-6">
          YOUR FITNESS OUR MISSION
        </h3>

        <p className={`mt-6 text-md leading-8 text-center max-w-3xl mx-auto ${
  darkMode ? "text-gray-300" : "text-gray-600"
}`}>
          At Energy Space, our mission is simple: to provide the tools and
          support you need to reach your fitness goals. We combine innovative
          technology with personalized guidance to make fitness easier,
          more accessible, and more motivating. Join us as we help you
          transform your fitness journey, one workout at a time.
        </p>

        <div className="mt-12 flex justify-center">
          <video
            ref={videoRef}
            className="w-full md:max-w-2xl lg:max-w-4xl rounded-3xl shadow-2xl"
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={fitnessVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default About;