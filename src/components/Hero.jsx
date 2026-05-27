import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Hero() {
  const techStack = ["React", "Node.js", "MongoDB", "Github"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-20 relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-cyan-50"
    >
      {/* ANIMATED BACKGROUND ORBS */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-yellow-200/40 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-cyan-200/40 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-200/30 blur-3xl"
      />

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-yellow-300 border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_#000]"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [15, -5, 15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-4 sm:right-16 w-20 sm:w-28 h-20 sm:h-28 bg-pink-300 border-[3px] border-black rounded-full shadow-[6px_6px_0px_#000]"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[5%] w-12 h-12 bg-cyan-300 border-[3px] border-black rotate-12 rounded-lg shadow-[3px_3px_0px_#000]"
      />
      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] left-[8%] w-8 h-8 bg-purple-300 border-[2px] border-black rounded-full shadow-[2px_2px_0px_#000]"
      />

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-yellow-300 border-[3px] border-black rounded-full text-black font-black text-xs sm:text-sm shadow-[4px_4px_0px_#000]"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for Work
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg text-gray-700 max-w-xl leading-relaxed"
          >
           I build scalable full-stack web applications with clean user interfaces and powerful backend systems.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5"
          >
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="px-6 sm:px-7 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-amber-400 border-[3px] border-black rounded-2xl text-black font-black text-sm sm:text-base shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              Explore Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              href="#resume"
              className="px-6 sm:px-7 py-3 sm:py-4 bg-white border-[3px] border-black rounded-2xl text-black font-black text-sm sm:text-base shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-center"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 sm:gap-5 mt-8 sm:mt-10"
          >
            <motion.a
              whileHover={{ y: -5, rotate: -5, scale: 1.05 }}
              href="https://github.com/AdarshDubey-TIMSCDR023"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center text-black text-xl sm:text-2xl shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, rotate: 5, scale: 1.05 }}
              href="https://www.linkedin.com/in/adarsh-dubey27032004/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-300 border-[3px] border-black rounded-2xl flex items-center justify-center text-black text-xl sm:text-2xl shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, rotate: 5, scale: 1.05 }}
              href="mailto:dubeyadarsh753@gmail.com"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-300 border-[3px] border-black rounded-2xl flex items-center justify-center text-black text-xl sm:text-2xl shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
            >
              <MdOutlineEmail />
            </motion.a>
          </motion.div>

          {/* CODE SNIPPET DECORATION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden md:block mt-8 font-mono text-[10px] text-gray-400 border-t-2 border-gray-200 pt-4"
          >
            <span className="text-green-600">const</span>{" "}
            <span className="text-yellow-600">developer</span>{" "}
            <span className="text-gray-600">=</span> {"{"}
            <br />
            &nbsp;&nbsp;name: <span className="text-green-600">"Adarsh Dubey"</span>,
            <br />        
            {"}"}
          </motion.div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/95 backdrop-blur-xl border-[4px] border-black rounded-[40px] p-5 sm:p-7 md:p-9 shadow-[12px_12px_0px_#000] hover:shadow-[8px_8px_0px_#000] transition-all duration-300"
          >
            {/* PROFILE HEADER */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">
                  Adarsh Dubey
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">
                    Full Stack Web Developer
                  </p>
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
              </div>
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-amber-400 border-[3px] border-black rounded-2xl sm:rounded-3xl shadow-[5px_5px_0px_#000] flex items-center justify-center text-2xl sm:text-3xl font-black text-black"
              >
                AD
              </motion.div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-7 sm:mt-9">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-gradient-to-br from-pink-200 to-rose-200 border-[3px] border-black rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[5px_5px_0px_#000] hover:shadow-[3px_3px_0px_#000] transition-all duration-200"
              >
                <h3 className="text-3xl sm:text-4xl font-black text-black">
                  10+
                </h3>
                <p className="mt-1 sm:mt-2 text-gray-700 text-xs sm:text-sm font-semibold">
                  Projects Completed
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-gradient-to-br from-cyan-200 to-sky-200 border-[3px] border-black rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[5px_5px_0px_#000] hover:shadow-[3px_3px_0px_#000] transition-all duration-200"
              >
                <h3 className="text-3xl sm:text-4xl font-black text-black">
                  5+
                </h3>
                <p className="mt-1 sm:mt-2 text-gray-700 text-xs sm:text-sm font-semibold">
                  Certifications
                </p>
              </motion.div>
            </div>

            {/* EXPERIENCE BADGE */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-5 sm:mt-6 bg-gray-900 border-[3px] border-black rounded-2xl p-3 sm:p-4 flex items-center justify-between"
            >
              <div>
                <p className="text-yellow-400 font-mono text-[10px] sm:text-xs font-bold">EXPERIENCE</p>
                <p className="text-white font-black text-sm sm:text-base">Fresher • Passionate Learner</p>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                &lt;/&gt;
              </div>
            </motion.div>

            {/* TECH STACK */}
            <div className="mt-7 sm:mt-9">
              <h3 className="text-xl sm:text-2xl font-black text-black mb-4 sm:mb-5">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-100 to-amber-100 border-[2px] sm:border-[3px] border-black rounded-full text-black font-black text-xs sm:text-sm shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] transition-all duration-200"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CODING STATUS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-black/10"
            >
              <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                <span className="text-gray-500">CODING STATUS</span>
                <span className="text-green-600 font-bold">● ACTIVE</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden border border-black/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;