import { useState } from "react";
import { motion } from "framer-motion";

import API from "../services/api";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

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

      setTimeout(() => {

        setSuccess(false);

      }, 3000);

    } catch (error) {

      console.log(error);

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

              Let’s Build
              <span className="text-yellow-500">
                {" "}Something
              </span>

              <br />

              Amazing.

            </h2>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl">

              Have a project idea or collaboration?
              Send me a message and let’s create
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
          >

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
                required
                className="w-full mt-3 px-5 py-4 bg-white border-[3px] border-black rounded-2xl text-black outline-none"
              />

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
                required
                className="w-full mt-3 px-5 py-4 bg-white border-[3px] border-black rounded-2xl text-black outline-none"
              />

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
                required
                className="w-full mt-3 px-5 py-4 bg-white border-[3px] border-black rounded-2xl text-black outline-none resize-none"
              />

            </div>

            {/* SUCCESS MESSAGE */}
            {
              success && (

                <div className="mt-6 px-5 py-4 bg-green-300 border-[3px] border-black rounded-2xl text-black font-bold">

                  Message Sent Successfully

                </div>

              )
            }

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 px-6 py-4 bg-yellow-300 border-[4px] border-black rounded-2xl text-black font-black text-lg shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition duration-200"
            >

              {
                loading
                  ? "Sending..."
                  : "Send Message"
              }

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;