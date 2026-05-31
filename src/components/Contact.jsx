import { useState } from "react";
import { motion } from "framer-motion";

import API from "../services/api";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // VALIDATION RULES
  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Full Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long";
    } else if (formData.name.trim().length > 50) {
      errors.name = "Name must not exceed 50 characters";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      errors.name = "Name can only contain letters, spaces, hyphens, and apostrophes";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    } else if (formData.email.length > 100) {
      errors.email = "Email must not exceed 100 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 1000) {
      errors.message = "Message must not exceed 1000 characters";
    }

    setFieldErrors(errors);
    return Object.values(errors).every((err) => err === "");
  };

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: "",
      });
    }

    // Clear general error on change
    if (error) {
      setError("");
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await API.post(
        "/api/contact",
        formData
      );

      console.log(response.data);

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFieldErrors({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message ||
        "Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-5 sm:px-8 lg:px-16 relative overflow-hidden"
    >

      {/* BACKGROUND SHAPES */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 border-[3px] border-black rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-300 border-[3px] border-black rounded-3xl rotate-12"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="inline-block px-5 py-2 bg-pink-300 border-[3px] border-black rounded-full text-black font-bold shadow-[4px_4px_0px_#000]">

              Contact Me

            </div>

            <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-tight">

              Let's Build
              <span className="text-yellow-500">
                {" "}Something
              </span>

              <br />

              Amazing.

            </h2>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl">

              Have a project idea or collaboration?
              Send me a message and let's create
              something powerful together.

            </p>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-[#fffdf8] border-[4px] border-black rounded-[35px] p-8 sm:p-10 shadow-[10px_10px_0px_#000]"
            noValidate
          >

            {/* GENERAL ERROR MESSAGE */}
            {error && (
              <div className="mb-6 px-5 py-4 bg-red-300 border-[3px] border-red-600 rounded-2xl text-red-900 font-bold">
                {error}
              </div>
            )}

            {/* NAME */}
            <div>

              <label className="text-black font-bold text-lg">

                Full Name

              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                maxLength="50"
                className={`w-full mt-3 px-5 py-4 bg-white border-[3px] rounded-2xl text-black outline-none transition-colors ${
                  fieldErrors.name
                    ? "border-red-500 bg-red-50"
                    : "border-black"
                }`}
              />

              {fieldErrors.name && (
                <p className="mt-2 text-red-600 text-sm font-semibold">
                  {fieldErrors.name}
                </p>
              )}

            </div>

            {/* EMAIL */}
            <div className="mt-6">

              <label className="text-black font-bold text-lg">

                Email Address

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                maxLength="100"
                className={`w-full mt-3 px-5 py-4 bg-white border-[3px] rounded-2xl text-black outline-none transition-colors ${
                  fieldErrors.email
                    ? "border-red-500 bg-red-50"
                    : "border-black"
                }`}
              />

              {fieldErrors.email && (
                <p className="mt-2 text-red-600 text-sm font-semibold">
                  {fieldErrors.email}
                </p>
              )}

            </div>

            {/* MESSAGE */}
            <div className="mt-6">

              <label className="text-black font-bold text-lg">

                Message

              </label>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                maxLength="1000"
                className={`w-full mt-3 px-5 py-4 bg-white border-[3px] rounded-2xl text-black outline-none resize-none transition-colors ${
                  fieldErrors.message
                    ? "border-red-500 bg-red-50"
                    : "border-black"
                }`}
              />

              <div className="flex justify-between items-center mt-2">
                <p
                  className={`text-sm font-semibold ${
                    fieldErrors.message
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {fieldErrors.message
                    ? fieldErrors.message
                    : `${formData.message.length}/1000`}
                </p>
              </div>

            </div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="mt-6 px-5 py-4 bg-green-300 border-[3px] border-green-600 rounded-2xl text-green-900 font-bold animate-pulse">

                Message Sent Successfully

              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading || Object.values(fieldErrors).some((err) => err !== "")}
              className="w-full mt-8 px-6 py-4 bg-yellow-300 border-[4px] border-black rounded-2xl text-black font-black text-lg shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >

              {loading ? "Sending..." : "Send Message"}

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;