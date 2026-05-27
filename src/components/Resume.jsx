import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaFilePdf,
  FaEye,
  FaCalendarAlt,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import API from "../services/api";

function Resume() {
  const [resume, setResume] = useState(null);

  // ================= FETCH RESUME =================
  const getResume = async () => {
    try {
      const response = await API.get("/api/resume");
      setResume(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResume();
  }, []);

  return (
    <section
      id="resume"
      className="w-full py-20 px-5 sm:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50"
    >
      {/* BACKGROUND SHAPES */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 border-[3px] border-black rounded-full opacity-20 blur-xl"
      />

      <motion.div
        animate={{
          rotate: [12, 0, 12],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-400 border-[3px] border-black rounded-3xl rotate-12 opacity-20 blur-xl"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-5 w-24 h-24 bg-gradient-to-br from-blue-300 to-cyan-400 border-[3px] border-black rounded-full opacity-20 blur-xl"
      />

      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute bottom-32 left-48 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute top-60 right-60 w-1 h-1 bg-black rounded-full"></div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="bg-white/90 backdrop-blur-xl border-[3px] border-black rounded-[40px] p-6 sm:p-8 shadow-[15px_15px_0px_#000] hover:shadow-[20px_20px_0px_#000] transition-all duration-300"
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="absolute -top-4 left-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 border-[2px] border-black rounded-full text-white font-black text-xs shadow-[3px_3px_0px_#000]">
              <FaStar className="text-yellow-300" />
              UPDATED
              <FaStar className="text-yellow-300" />
            </div>
          </motion.div>

          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
            {/* LEFT - PDF Icon & Info */}
            <div className="flex items-center gap-5">
              {/* ANIMATED PDF ICON */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                className="relative"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 border-[4px] border-black rounded-2xl flex items-center justify-center text-white text-4xl shadow-[6px_6px_0px_#000]">
                  <FaFilePdf />
                </div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-1 -top-1 w-3 h-3 bg-green-400 border border-black rounded-full"
                ></motion.div>
              </motion.div>

              {/* TEXT INFO */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-500 border-[2px] border-black rounded-full text-white font-black text-xs shadow-[3px_3px_0px_#000] mb-3">
                  <FaUserGraduate className="text-sm" />
                  PROFESSIONAL RESUME
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                  Adarsh Dubey
                </h2>
                <p className="mt-1 text-gray-600 text-sm flex items-center gap-2">
                  <FaCalendarAlt className="text-xs" />
                  Full Stack Developer 
                </p>
              </div>
            </div>

            {/* RIGHT - Action Buttons */}
            {resume && (
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={resume.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border-[2px] border-black rounded-xl text-white font-bold text-sm shadow-[5px_5px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                >
                  <FaEye />
                  Preview
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={resume.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  download="Adarsh_Dubey_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 border-[2px] border-black rounded-xl text-black font-bold text-sm shadow-[5px_5px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                >
                  <FaDownload />
                  Download
                </motion.a>
              </div>
            )}
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-4 mb-6">
            <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
              <span>Skills Highlight</span>
              <span>95%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 border border-black rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              ></motion.div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="border-t-[3px] border-black pt-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4"
            >
              Explore my professional journey showcasing expertise in{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                React.js, Node.js, and Full-Stack Development
              </span>
              . This comprehensive resume highlights my technical projects,
              certifications, and professional achievements.
            </motion.p>

            {/* SKILL TAGS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["React", "Node.js", "MongoDB", "Express",].map(
                (skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full text-xs font-semibold text-gray-700 shadow-sm"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* DECORATIVE BOTTOM ELEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <GiSkills className="text-sm" />
            Available in PDF format • Ready to download
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;