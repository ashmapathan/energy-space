import { useState } from "react";

import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

function Blogs({ darkMode }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const blogs = [
    {
      id: 1,
      image: blog1,
      category: "Exercise",
      title: "Conquering Consistency: How to Make Exercise a Habit You Love",
      content:
          "Consistency is the key to long-term fitness success. Start with small goals, create a workout schedule, choose activities you enjoy, and stay motivated by tracking your progress. Remember that building a habit takes time, but every workout brings you closer to a healthier lifestyle.",
    },
    {
      id: 2,
      image: blog2,
      category: "Weight Loss",
      title: "Weight Loss: A Sustainable Approach for a Healthier You",
      content:
          "Healthy weight loss comes from maintaining a balanced diet, staying active, drinking enough water, and getting quality sleep. Avoid crash diets and focus on gradual, sustainable changes that you can maintain for life.",
    },
    {
      id: 3,
      image: blog3,
      category: "Nutrition",
      title: "Fuel Your Fitness: A Guide to Nutrition for Peak Performance",
      content:
          "Your body needs the right nutrients to perform well. Eat lean proteins, whole grains, fruits, vegetables, and healthy fats. Stay hydrated and time your meals around workouts to maximize energy and recovery.",
    },
  ];

  return (
    <section
      id="blogs"
      className={`py-20 px-6 lg:px-20 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black"
    }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Latest Blogs
        </h2>

        <p className={`text-center mt-4 max-w-2xl mx-auto ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
          Stay updated with expert fitness tips, healthy lifestyle advice,
          and practical workout strategies.
        </p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800"
      : "bg-white"
  }`}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full md:h-52 lg:h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <span className="inline-block bg-blue-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                  {blog.category}
                </span>

                <h3 className="text-xl font-bold mt-4 leading-8">
                  {blog.title}
                </h3>

                <button
  onClick={() => setSelectedBlog(blog)}
  className="mt-6 text-green-500 font-semibold hover:text-green-600 transition cursor-pointer"
>
  Read More →
</button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBlog && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
    <div
      className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6  ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      
       <button
        onClick={() => setSelectedBlog(null)}
        className={`sticky top-0 ml-auto flex items-center justify-center w-10 h-10 rounded-full text-2xl cursor-pointer transition ${
          darkMode
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        ✕
      </button>

      <img
        src={selectedBlog.image}
        alt={selectedBlog.title}
        className="w-full h-48 object-cover rounded-xl mt-2"
      />

      <span className="inline-block mt-6 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
        {selectedBlog.category}
      </span>

      <h2 className="text-2xl md:text-3xl font-bold mt-4">
        {selectedBlog.title}
      </h2>

      <p className="mt-6 leading-8">
        {selectedBlog.content}
      </p>
    </div>
  </div>
)}
    </section>
  );
}

export default Blogs;