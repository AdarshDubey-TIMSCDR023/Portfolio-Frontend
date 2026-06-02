import { motion } from "framer-motion";
import {
  FaTrophy,
  FaAward,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

function Achievements() {
  const achievements = [
    {
      title: "Research Poster",
      description:
        "1st Prize Winner at ICAIM 2026. Recognized for innovative research contribution.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEj5YNiR6yqPh6vwWB4lUsIUepgfsFx3I4ljk2_HbOEKNeqoWcVIF_OF41tV0Ywik6ztpF6f0wZ51uGKfbuszmQQtspPjrdj1mYoMqipyhN1IThxIjBLDwG5GgplWfQah9Oo3XODuWI9rre[...]",
      icon: <FaTrophy />,
      color: "from-yellow-400 to-amber-400",
      bgColor: "bg-yellow-50",
      tag: "Winner",
      link:
        "https://www.linkedin.com/posts/adarsh-dubey27032004_research-artificialintelligence-agriculture-ugcPost-7427339366248845312-hHjh/?utm_source=social_share_send&utm_medium=member_desktop_web&rc[...]",
    },

    {
      title: "TechAstra-2025",
      description:
        "Secured 2nd position in a tech fest focused on innovation and project development.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEhAx5IsYbP2eVI6CNWIV2VStPVoagB3kPsz3VB5UDFsdsqM2EwoHQlzhOJlTOZSGbVfXtGAfJt3hXtLyhM9omUQR58KQnHWQAlWhubqCdhDNgegDEwAsg74yh2mNY8QKucaIxeBvPkWo5C[...]",
      icon: <FaTrophy />,
      color: "from-cyan-400 to-sky-400",
      bgColor: "bg-cyan-50",
      tag: "Tech Fest",
      link:
        "https://www.linkedin.com/posts/adarsh-dubey27032004_techastra-runnerup-naviride-activity-7303343108446994433-LsAP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbG4_EBTD[...]",
    },

    {
      title: "Corizo Internship",
      description:
        "Worked as a Web Development Intern and gained experience in building modern web applications.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEjPYx8I6GkNx43LPpx6yezJ8Sej-uxaQ4E-kKkYEsLOqd6TMwzd9Es1x8df4iBZOkkB2ZXOzF32a28bhHDH0zb4mTzYkooHIoJ_6Bu-Jiv3Tw0S2RE1fLGEV_EG8KKB9V4tZv5aAKFNkRl[...]",
      icon: <FaLaptopCode />,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50",
      tag: "Internship",
      link:
        "https://www.linkedin.com/posts/adarsh-dubey27032004_certification-in-web-development-activity-7163873917323931649-ABTC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbG4[...]",
    },

    {
      title: "NDLI Business Quiz",
      description:
        "Participated in The Business Quiz organized by NDLI Club and IIT Kharagpur.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEhMwAlo6VjCB7deSgCSn9KQzW2sRvrBs0bfkpGwQHeaLXzCJCvm3K6JhrfWlDfeLbPm5FEwGmeAhAE0xcMoYYM8PvtQ_DJSLp86fXM37woIDMCu4kWfWMeVbarrxCk8eH_d9Nc45WDP0Tg[...]",
      icon: <FaCertificate />,
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-50",
      tag: "Quiz",
      link:
        "https://mittimaimilladenge.blogspot.com/2026/05/participating-in-ndli-business-quiz.html",
    },

    {
      title: "Bachelor of Computer Applications",
      description:
        "Successfully completed Bachelor of Computer Applications (BCA) in 2025, building a strong foundation in software development, web technologies, databases, and computer science.",
      image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEgXNPR-oa6uVF5mpp4i5yJTNZ3Oy1wrtNvm2owp4UyONXx8vWTGhJeYhWVyV1aYluZk-AS4zBb1qCO02BF6ZwUmMxvir9WQ60k8Y6zR40XGrl9mlq4XWMUdqVfpZMSzzHczpyaPb5eLdomLs1HMeX6kysZn6_gcqCrkjdXilsDNOrX_f96DDoaP7JLBztk",
      icon: <FaAward />,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-50",
      tag: "Degree",
      link:
        "https://adarshdubeyportfolio.blogspot.com/2026/06/graduation-milestone-proud-to-share.html",
    },
  ];

  return (
    <section
      id="achievements"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden bg-white"
    >
      {/* BACKGROUND WATERMARK TEXT - ACHIEVEMENT REPEATED */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(0,0,0,0.03) 80px, rgba(0,0,0,0.03) 160px)`,
          }}
        >
          <div 
            className="w-full h-full opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 120px, #000 120px, #000 121px, transparent 121px, transparent 240px)`,
            }}
          />
        </div>
        {/* Rotated watermark text pattern */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, 
              transparent, 
              transparent 150px, 
              rgba(0,0,0,0.04) 150px, 
              rgba(0,0,0,0.04) 152px,
              transparent 152px,
              transparent 300px)`,
          }}
        />
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-20 rotate-[-25deg] scale-150">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="text-7xl sm:text-8xl md:text-9xl font-black text-gray-200 select-none whitespace-nowrap"
              style={{
                opacity: 0.15,
                letterSpacing: "20px",
                transform: `translateY(${i % 2 === 0 ? "0" : "40px"})`,
              }}
            >
              ACHIEVEMENT
            </div>
          ))}
        </div>
        {/* Additional subtle pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* RETRO GRID PATTERN - LIGHT GREY */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 40px),
                           repeating-linear-gradient(90deg, #000, #000 2px, transparent 2px, transparent 40px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-4 left-4 w-32 h-8 bg-gradient-to-r from-gray-400 to-gray-600 border border-gray-300 rounded-sm" />
      <div className="absolute bottom-4 right-4 w-24 h-6 bg-gray-200 border border-gray-300 rounded-sm" />

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-10 w-12 h-12 border-4 border-gray-400 rotate-45"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-16 h-16 rounded-full border-4 border-gray-400"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-4 w-8 h-8 bg-gray-400 border-2 border-gray-600"
      />

      {/* TITLE BAR */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-600 to-gray-500 border-b-2 border-gray-300 flex items-center px-2 gap-2 z-20">
        <div className="w-4 h-4 bg-gray-200 border border-gray-400" />
        <span className="text-white text-xs font-bold">ACHIEVEMENTS.EXE</span>
        <div className="flex-1" />
        <div className="w-6 h-5 bg-gray-400 border border-gray-300 text-white text-xs flex items-center justify-center">—</div>
        <div className="w-6 h-5 bg-gray-400 border border-gray-300 text-white text-xs flex items-center justify-center">□</div>
        <div className="w-6 h-5 bg-red-600 border border-gray-300 text-white text-xs flex items-center justify-center">✕</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-700 border-4 border-white text-white font-black text-sm sm:text-base shadow-[4px_4px_0px_#000]"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            ⚡ ACHIEVEMENTS ⚡
          </motion.div>
          <h2 className="mt-6 sm:mt-7 text-4xl sm:text-5xl lg:text-6xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">
              MY JOURNEY
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base font-mono">
            {`>_ MILESTONES AND ACCOMPLISHMENTS ALONG THE WAY`}
          </p>
        </motion.div>

        {/* ACHIEVEMENT CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 mt-12 sm:mt-16">
          {achievements.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, rotate: 0 }}
              className="bg-white border-4 border-gray-300 rounded-none overflow-hidden shadow-[8px_8px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all group"
            >
              {/* IMAGE SECTION */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden border-b-4 border-gray-300">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* CONTENT SECTION */}
              <div className="p-4 sm:p-5 bg-white">
                {/* ICON & TAG */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 0, scale: 1.1 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${item.color} border-2 border-gray-300 flex items-center justify-center text-black text-lg sm:text-xl shadow-[3px_3px_0px_#000]`}
                  >
                    {item.icon}
                  </motion.div>
                  <div className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${item.color} border-2 border-gray-300 text-[9px] sm:text-xs font-black text-black shadow-[2px_2px_0px_#000] font-mono`}>
                    ▶ {item.tag}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-black text-gray-700 font-mono">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed font-mono">
                  {item.description}
                </p>

                {/* PROGRESS BAR */}
                <div className="mt-4 w-full h-2 bg-gray-200 border border-gray-300">
                  <div className="h-full bg-gradient-to-r from-gray-400 to-gray-600 w-2/3" />
                </div>

                {/* VIEW DETAILS LINK */}
                <div className="mt-4 sm:mt-5 flex items-center gap-2 text-[10px] sm:text-xs font-black text-gray-500 group-hover:text-gray-700 transition-colors duration-200 font-mono">
                  <span>[ VIEW PROJECT ]</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-xs"
                  >
                    ▸
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* STATUS BAR */}
        <div className="mt-12 p-2 bg-white border-2 border-gray-300 flex items-center justify-between text-gray-500 text-xs font-mono relative z-20">
          <span>📁 5 ITEMS | TOTAL SIZE: 3.0 MB</span>
        
          <span>⚡ 100%</span>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
