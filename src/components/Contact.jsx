import { useState } from "react";
import emailjs from "@emailjs/browser";
emailjs.init({
  publicKey: "leZPvf6UDyHAioss8",
});

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
}

const [status, setStatus] = useState({
  type: "",
  message: "",
});

async function handleSubmit(event) {
  event.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    
    setStatus({
  type: "error",
  message: "Please fill in all fields.",
});
    return;
  }

   try {
    await emailjs.send(
  "service_1u0yvdg",
  "template_5fn5bbu",
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    time: new Date().toLocaleString(),
  }
);
 setStatus({
  type: "success",
  message: "Message sent successfully!",
});

  setFormData({
  name: "",
  email: "",
  subject: "",
  message: "",
});

  } catch (error) {
   console.error(error);

  setStatus({
    type: "error",
    message: "Failed to send message. Please try again.",
  });
  }
 
}


  return (
    <>
      <section
  id="contact"
  className={`py-20 px-6 lg:px-20 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black"
  }`}>

    <div className="max-w-6xl mx-auto"><h2 className="text-4xl font-bold text-center">
  Contact Us
</h2>

<p className="text-center mt-4 text-gray-500">
  We'd love to hear from you. Send us a message!
</p>
</div>

<div className="mt-12 max-w-3xl mx-auto">
    <form 
    onSubmit={handleSubmit}
    className="space-y-6">
        <input
  type="text"
  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
  className={`w-full p-4 rounded-lg border outline-none ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white"
      : "bg-white border-gray-300 text-black"
  }`}
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  className={`w-full p-4 rounded-lg border outline-none ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white"
      : "bg-white border-gray-300 text-black"
  }`}
/>

<input
  type="text"
  name="subject"
  placeholder="Subject"
  value={formData.subject}
  onChange={handleChange}
  className={`w-full p-4 rounded-lg border outline-none ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white"
      : "bg-white border-gray-300 text-black"
  }`}
/>

<textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="6"
  placeholder="Your Message"
  className={`w-full p-4 rounded-lg border outline-none resize-none ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white"
      : "bg-white border-gray-300 text-black"
  }`}
/>

{status.message && (
  <p
    className={`text-center font-medium ${
      status.type === "success"
        ? "text-green-600"
        : "text-red-600"
    }`}
  >
    {status.message}
  </p>
)}

<button
  type="submit"
  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg transition cursor-pointer"
>
  Send Message
</button>
    </form>
</div>
  </section>
    </>
  );
}

export default Contact;