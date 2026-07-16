import track from "../assets/images/track.jpg";
import analyse from "../assets/images/analyse.jpg";
import train from "../assets/images/train.jpg";
import connect from "../assets/images/connect.jpg";
import challenge from "../assets/images/challenge.jpg";

function Services({ darkMode }) {
  const services = [
  {
    title: "Track",
    image: track,
    description:
      "Log your workouts, monitor your progress, and stay consistent with your fitness journey.",
  },
  {
    title: "Analyze",
    image: analyse,
    description:
      "Gain valuable insights into your performance with detailed fitness statistics and progress reports.",
  },
  {
    title: "Train",
    image: train,
    description:
      "Follow personalized workout plans designed to help you build strength, endurance, and confidence.",
  },
  {
    title: "Connect",
    image: connect,
    description:
      "Engage with a supportive fitness community, share achievements, and stay motivated together.",
  },
  {
    title: "Challenge",
    image: challenge,
    description:
      "Participate in exciting fitness challenges, compete with friends, and unlock new milestones.",
  },
];

  return (
    <section
      id="services"
      className={`py-20 px-6 lg:px-20 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black"
  }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <p className={`text-center mt-4 max-w-2xl mx-auto ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}>
          Energy Space offers 5 essential services to help you achieve your
          fitness goals with ease and flexibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          {services.map((service) => (
           <div
  key={service.title}
  className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
>
  <div className="overflow-hidden">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-56 object-cover object-top transition-transform duration-500 hover:scale-110"
    />
  </div>

  <div className="p-2 text-center">
    <h3 className={`text-2xl font-semibold ${
    darkMode ? "text-white" : "text-black"
  }`}>
      {service.title}
    </h3>

    <p className={`mt-2 text-sm leading-6 ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}>
      {service.description}
    </p>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;