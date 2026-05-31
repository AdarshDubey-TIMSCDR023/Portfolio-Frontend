import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const skills = ["React", "Node.js", "MongoDB", "Github"];

  const education = [
    {
      degree: "MCA",
      college: "TIMSCDR • Mumbai",
      year: "2025 - Present",
      color: "bg-yellow-300",
      dotColor: "bg-red-400",
    },
    {
      degree: "BCA (Data Science)",
      college: "CSMU • Navi Mumbai",
      year: "2022 - 2025",
      color: "bg-cyan-300",
      dotColor: "bg-purple-400",
    },
  ];

  const stats = [
    { value: "10+", label: "Projects", color: "bg-pink-300" },
    { value: "5+", label: "Certificates", color: "bg-cyan-300" },
  ];

  return (
    <section
      id="about"
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden bg-[#f0f0f0]"
    >
      {/* RETRO GRID BACKGROUND - Responsive */}
      <div
        className="absolute inset-0 opacity-5 sm:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? "20px 20px" : "30px 30px",
        }}
      />

      {/* CRT SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* RETRO FLOATING SHAPES - Hidden on mobile */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="hidden md:block absolute top-10 right-8 w-12 h-12 md:w-16 md:h-16 bg-pink-400 border-[3px] border-black rounded-none shadow-[4px_4px_0px_#000]"
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="hidden lg:block absolute bottom-10 left-8 w-16 h-16 md:w-20 md:h-20 bg-cyan-400 border-[3px] border-black rounded-none shadow-[4px_4px_0px_#000]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="hidden sm:block absolute top-1/3 right-8 md:right-16 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 border border-black"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADING - Fully Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center px-2"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="inline-flex px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400 border-[3px] border-black rounded-none font-black text-xs sm:text-sm shadow-[4px_4px_0px_#000] uppercase tracking-wider"
          >
            {">"} About Me
          </motion.div>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
            <span className="text-black block sm:inline">Full Stack</span>
            <span className="text-yellow-600 bg-yellow-200 px-2 sm:px-3 inline-block mt-2 sm:mt-0 sm:ml-2 border-[2px] border-black shadow-[2px_2px_0px_#000]">
             Web Developer
            </span>
          </h2>
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 animate-pulse" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 animate-pulse delay-75" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 animate-pulse delay-150" />
          </div>
        </motion.div>

        {/* MAIN GRID - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-5 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-14">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-6"
          >
            {/* PROFILE CARD - Responsive */}
            <motion.div
              whileHover={!isMobile ? { y: -4, rotate: -0.5 } : {}}
              className="relative bg-[#faf8f0] border-[3px] sm:border-[4px] border-black rounded-none p-4 sm:p-5 shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000]"
            >
              {/* BINARY DECORATION - Hidden on mobile */}
              <div className="hidden sm:block absolute top-2 right-2 font-mono text-[8px] sm:text-[10px] font-bold text-gray-400">
                010011
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* IMAGE */}
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="relative"
                >
                  <div className="w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-44 bg-yellow-400 border-[3px] sm:border-[4px] border-black rounded-none overflow-hidden shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]">
                    <img
                      src="/MYIMAGE.png"
                      alt="Adarsh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* STATUS BAR */}
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 bg-green-400 border-[2px] sm:border-[3px] border-black rounded-none px-2 sm:px-3 py-0.5 sm:py-1 shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000] whitespace-nowrap"
                  >
                    <p className="font-mono font-black text-[7px] sm:text-[9px] text-black uppercase tracking-wider">
                      [ACTIVE]
                    </p>
                  </motion.div>
                </motion.div>

                {/* DETAILS */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter">
                    Adarsh Dubey
                  </h3>
                  <div className="inline-block mt-1.5 sm:mt-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-200 border-[2px] border-black text-[10px] sm:text-xs font-mono font-bold">
                    Full Stack Web Developer
                  </div>
                  <p className="mt-3 sm:mt-4 text-gray-700 text-xs sm:text-sm leading-relaxed font-mono px-2 sm:px-0">
                    Fresher developer focused on learning, building scalable
                    web apps, and solving problems.
                  </p>
                  {/* SKILLS - Responsive wrap */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 mt-4 sm:mt-5">
                    {skills.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={!isMobile ? { y: -3, rotate: index % 2 === 0 ? -2 : 2 } : {}}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-cyan-200 border-[2px] border-black rounded-none text-[10px] sm:text-xs font-black shadow-[2px_2px_0px_#000] font-mono"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* EMAIL CARD - Responsive */}
            <motion.a
              href="mailto:dubeyadarsh753@gmail.com"
              whileHover={!isMobile ? { y: -3, x: 2 } : {}}
              className="flex items-center gap-3 sm:gap-4 bg-yellow-400 border-[3px] sm:border-[4px] border-black rounded-none px-4 sm:px-5 py-3 sm:py-4 shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]"
            >
              <motion.div
                whileHover={!isMobile ? { rotate: 5 } : {}}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-[2px] sm:border-[3px] border-black rounded-none flex items-center justify-center shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000]"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </motion.div>
              <div className="flex-1 min-w-0">
                <p className="text-[8px] sm:text-[9px] font-mono font-black uppercase text-black/70 tracking-wider">
                  [EMAIL]
                </p>
                <p className="text-black font-black text-xs sm:text-sm md:text-base font-mono break-all">
                  dubeyadarsh753@gmail.com
                </p>
              </div>
            </motion.a>

            {/* TERMINAL STYLE CARD - Responsive */}
            <motion.div
              whileHover={!isMobile ? { y: -2 } : {}}
              className="bg-black border-[2px] sm:border-[3px] border-yellow-400 rounded-none p-3 sm:p-4 shadow-[3px_3px_0px_#000] sm:shadow-[5px_5px_0px_#000]"
            >
              <div className="flex gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-green-400 break-all">
                $ echo "Ready to collaborate"
              </p>
              <p className="font-mono text-[10px] sm:text-xs text-green-400 mt-1">
                $ --open-to-work
              </p>
              <p className="font-mono text-[10px] sm:text-xs text-green-400 mt-1">
                {">"} status: available
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-6"
          >
            {/* STATS - Responsive Grid (2x2 on mobile, 2x2 on tablet, 2x2 on desktop) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={!isMobile ? { y: -3, rotate: index % 2 === 0 ? -1 : 1 } : {}}
                  className={`${stat.color} border-[3px] sm:border-[4px] border-black rounded-none p-3 sm:p-5 shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]`}
                >
                  <motion.h3
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="text-2xl sm:text-3xl md:text-4xl font-black font-mono"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm font-black uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <div className="w-full h-0.5 sm:h-1 bg-black mt-2 sm:mt-3" />
                </motion.div>
              ))}
            </div>

            {/* EDUCATION - Responsive */}
            <motion.div
              whileHover={!isMobile ? { y: -3 } : {}}
              className="bg-[#faf8f0] border-[3px] sm:border-[4px] border-black rounded-none p-4 sm:p-5 shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000]"
            >
              {/* TOP */}
              <div className="flex items-center justify-between mb-4 sm:mb-5 flex-wrap gap-2">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter flex items-center gap-1 sm:gap-2">
                  <span className="text-yellow-500 text-2xl sm:text-3xl">⌘</span>
                  Education
                </h3>
                <motion.div
                  animate={{
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 border-[2px] border-black"
                />
              </div>

              {/* EDUCATION LIST */}
              <div className="space-y-3 sm:space-y-4">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={!isMobile ? { x: 4 } : {}}
                    className={`${item.color} border-[2px] sm:border-[3px] border-black rounded-none p-3 sm:p-4 shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000]`}
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div
                        className={`w-2 h-2 sm:w-3 sm:h-3 ${item.dotColor} border border-black mt-1 flex-shrink-0`}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h4 className="text-base sm:text-lg font-black uppercase">
                              {item.degree}
                            </h4>
                            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-700 font-mono">
                              {item.college}
                            </p>
                          </div>
                          <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white border-[2px] border-black rounded-none text-[8px] sm:text-[10px] font-black shadow-[2px_2px_0px_#000] font-mono w-fit whitespace-nowrap">
                            {item.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* RETRO PROGRESS BAR - Responsive */}
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-3 border-t-2 border-black/20">
                <div className="flex justify-between text-[8px] sm:text-[9px] font-mono font-bold mb-1">
                  <span>COMPLETION</span>
                  <span>75%</span>
                </div>
                <div className="w-full h-2 sm:h-3 bg-gray-300 border-[2px] border-black">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-yellow-400 border-r-2 border-black"
                  />
                </div>
              </div>
            </motion.div>

            {/* FUN RETRO QUOTE - Responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:block bg-gray-900 border-[3px] border-yellow-400 rounded-none p-3 sm:p-4 text-center"
            >
              <p className="font-mono text-[10px] sm:text-xs text-yellow-400">
                "If you want to shine like a sun, first burn like a sun."
              </p>
              <p className="font-mono text-[8px] sm:text-[10px] text-gray-500 mt-1">
                — Sir A. P. J. Abdul Kalam
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
